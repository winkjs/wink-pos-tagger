//     wink-pos-tagger
//     Optimal English Part-of-speech (POS) tagger
//
//     Copyright (C) 2017  GRAYPE Systems Private Limited
//
//     This file is part of “wink-pos-tagger”.
//
//     “wink-pos-tagger” is free software: you can redistribute
//     it and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-pos-tagger” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-pos-tagger”.
//     If not, see <http://www.gnu.org/licenses/>.

//
// Defines the morphological rules for guessing the POS for unknown words.
var unknownWordsPOS = require( 'wink-lexicon/src/unknown-words.js' );

// POS for `tag`!
var tagPOS = require( 'wink-lexicon/src/tags.js' );

// POS for punctuations.
var punctuationPOS = require( 'wink-lexicon/src/punctuations.js' );

// ### unigramPOSTagger
/**
 *
 * Tags a single input `token` using the `lexicon`. Attempts to apply
 * morphological rules if the look up fails. Finally falls bact to NN!
 *
 * @param {object} token — that needs to be tagged; must follow wink-tokenizer.
 * standards.
 * @param {object} lexicon — containing word/pos key/value pairs.
 * @return {array} the array of all possible part-of-speeches.
 * @private
*/
var unigramPOSTagger = function ( token, lexicon ) {
  var word = token.value.toLowerCase();
  // Arrray of pos for the word from lexicon.
  var poses;
  // Finish off with punctuations first.
  if ( token.tag === 'punctuation' ) {
    token.pos = punctuationPOS[ token.value ];
    return [ token.pos ];
  }
  // Start with tag lookup!
  token.pos = tagPOS[ token.tag ];
  if ( token.pos === undefined ) {
    // Didn't work, try dictionary lookup.
    poses = lexicon[ word ];
    token.pos = ( poses ) ? poses[ 0 ] :
                // Still struggling, time to apply morphological rules.
                // Their sequence of application is important: match the longest
                // one first!
                ( unknownWordsPOS[ word.slice( -3 ) ] ||
                  ( unknownWordsPOS[ word.slice( -2 ) ] ||
                      unknownWordsPOS[ word.slice( -1 ) ] ) );
    if ( !token.pos && word.slice( 0, 2 ) === 'un' && lexicon[ word.slice( 2 ) ] ) {
      token.pos = 'JJ';
    } else {
      // Nothing worked, fall back to noun!
      token.pos = token.pos || 'NN';
    }
  } else {
    // Tag POS is returned.
    return [ token.pos ];
  }
  // The `poses` can be undefined in case of unknown words, un-adjectives & NN fallback.
  return ( poses ) ? poses : [ token.pos ];
}; // unigramPOSTagger();

module.exports = unigramPOSTagger;
