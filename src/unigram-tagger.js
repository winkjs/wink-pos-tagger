//     wink-pos-tagger
//     English Part-of-speech (POS) tagger
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-pos-tagger”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
// Defines the morphological rules for guessing the POS for unknown words.
var unknownWordsPOS = require( 'wink-lexicon/src/unknown-words.js' );

// POS for `tag`!
var tagPOS = require( 'wink-lexicon/src/tags.js' );
var words = require( 'wink-lexicon/src/wn-words.js' );
var adjExceptions = require( 'wink-lexicon/src/wn-adjective-exceptions.js' );
var nounExceptions = require( 'wink-lexicon/src/wn-noun-exceptions.js' );
var verbExceptions = require( 'wink-lexicon/src/wn-verb-exceptions.js' );
var senseMap = require( 'wink-lexicon/src/wn-word-senses.js' );

// POS for punctuations.
var punctuationPOS = require( 'wink-lexicon/src/punctuations.js' );

const rgxs4POS = [
  // 0-2: NNS/VBZ
  { replace: /s$/, by: '' },
  { replace: /es$/, by: '' },
  { replace: /ies$/, by: 'y' },
  // 3-4: VBG
  { replace: /ing$/, by: '' },
  { replace: /ing$/, by: 'e' },
  // 5-6: VBD/VBN
  { replace: /ed$/, by: '' },
  { replace: /d$/, by: '' },
  // 7-8: JJR
  { replace: /er$/, by: '' },
  { replace: /r$/, by: '' },
  // 9-10: JJS
  { replace: /est$/, by: '' },
  { replace: /st$/, by: '' },
  // Balance: NNS
  { replace: /xes$/, by: 'x' },
  { replace: /zes$/, by: 's' },
  { replace: /ves$/, by: 'f' },
  { replace: /ches$/, by: 'ch' },
  { replace: /shes$/, by: 'sh' },
  { replace: /men$/, by: 'man' }
];

// ### isPotentialWord
/**
 *
 * Checks if the supplied `word` is potentially a valid English word by
 * applying regexes sequentially and performaling a level-2 look up.
 *
 * @param {string} word that needs to be checked
 * @return {boolean} true if it is a potential English word, otherwise false.
 * @private
*/
var isPotentialWord = function ( word ) {
  for ( var i = 0, imax = rgxs4POS.length; i < imax; i += 1 ) {
    if ( rgxs4POS[ i ].replace.test( word ) ) {
      if ( words[ word.replace( rgxs4POS[ i ].replace, rgxs4POS[ i ].by ) ] !== undefined ) return true;
    }
  }

  return false;
};

// ### unigramL2POSTagger
/**
 *
 * Tags a single input `token` whose lookup has failed in the `lexicon`. Attempts
 * to apply morphological rules if token is found in the level-2 lookup.
 * Finally falls bact to NNP!
 *
 * @param {object} token that needs to be tagged; must follow wink-tokenizer.
 * standards.
 * @param {object} lexicon containing word/pos key/value pairs.
 * @return {array} the array of all possible part-of-speeches.
 * @private
*/
var unigramL2POSTagger = function ( token, lexicon ) {
  var word = token.normal;
  var index = words[ word ];
  var pos;
  if ( index || adjExceptions[ word ] || nounExceptions[ word] || verbExceptions[ word ] || isPotentialWord( word ) ) {
    if ( index && senseMap[ index ][ 0 ] === 15 && ( /^[A-Z][a-z]+/ ).test( token.value ) ) {
      pos = 'NNP';
    } else {
      // Word exists, can apply morphological rules safely.
      // Their sequence of application is important: match the longest
      // one first!
      pos = ( unknownWordsPOS[ word.slice( -4 ) ] ||
              ( unknownWordsPOS[ word.slice( -3 ) ] ||
                ( unknownWordsPOS[ word.slice( -2 ) ] ||
                    unknownWordsPOS[ word.slice( -1 ) ] ) ) );
      if ( !pos && word.slice( 0, 2 ) === 'un' && lexicon[ word.slice( 2 ) ] ) {
        pos = 'JJ';
      }
    }
  } else {
    // Seems like an unknown word, make it proper noun!
    pos = 'NNP';
  }
  // Return poses intelligently to allow the context rules to work!
  return ( ( pos === undefined ) ?
            [ 'NN', 'VBP', 'VB' ] : ( pos === 'NNS' ) ?
              [ 'NNS', 'VBZ' ] : ( pos === 'VBN' ) ?
                  [ 'VBD', 'VBN' ] : [ pos ]
         );
}; // unigramL2POSTagger()

// ### unigramPOSTagger
/**
 *
 * Tags a single input `token` using the `lexicon`. Attempts to apply
 * morphological rules if the primary look up fails but secondary one succeeds.
 * Finally falls bact to NNP!
 *
 * @param {object} token that needs to be tagged; must follow wink-tokenizer.
 * standards.
 * @param {object} lexicon containing word/pos key/value pairs.
 * @return {array} the array of all possible part-of-speeches.
 * @private
*/
var unigramPOSTagger = function ( token, lexicon ) {
  // If token is an **entity with pos defined**, no tagging is needed.
  if ( token.entityType && token.pos ) return [ token.pos ];
  // Use `normalize()` to obtain the word and not `toLowerCase()`.
  var word = token.normal;
  // Arrray of pos for the word from lexicon.
  var poses;
  // Finish off with punctuations first.
  if ( token.tag === 'punctuation' ) {
    // `|| token.value` is a catch all clause! In other words, unknown
    // punctuation will have a pos as **it's value**.
    token.pos = punctuationPOS[ token.value ] || token.value;
    return [ token.pos ];
  }
  if ( token.tag === 'symbol' && token.value !== '&' ) {
    token.pos = 'NN';
    return [ token.pos ];
  }
  // Start with tag lookup!
  token.pos = tagPOS[ token.tag ];
  if ( token.pos === undefined ) {
    // Didn't work, try dictionary lookup.
    poses = lexicon[ word ] || unigramL2POSTagger( token, lexicon );
    token.pos = poses[ 0 ];
  } else {
    // Tag POS is returned.
    return [ token.pos ];
  }
  // The `poses` can be undefined in case of unknown words, un-adjectives & NN fallback.
  return ( poses );
}; // unigramPOSTagger();

module.exports = unigramPOSTagger;
