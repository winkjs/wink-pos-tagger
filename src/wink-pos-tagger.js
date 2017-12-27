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
var helpers = require( 'wink-helpers' );
var winkLexicon = require( 'wink-lexicon/src/lexicon.js' );
var unigramPOSTagger = require( './unigram-tagger.js' );
var applyContextRules = require( './rules-engine.js' );
// Load tokenizer, instanciate and get tokenize method; use default config.
var tokenize = require( 'wink-tokenizer' )().tokenize;

// ### posTagger
/**
 *
 * Creates an instance of **`wink-pos-tagger`**.
 *
 * @return {methods} object conatining set of API methods for pos-tagging — [tag](#tag)
 * and for updating lexicon — [updateLexicon](#updatelexicon).
 * @example
 * // Load wink tokenizer.
 * var tagger = require( 'wink-pos-tagger' );
 * // Create your instance of wink tokenizer.
 * var myTagger = tagger();
*/
var posTagger = function ( ) {

  // Returned!
  var methods = Object.create( null );

  // ### updateLexicon
  /**
   *
   * Updates the internal lexicon using the input `lexicon`. If a word/pos pair
   * is found in the internal lexicon then it's value is updated with the new pos;
   * otherwise it added.
   *
   * @param {object} lexicon — containing **`word/pos`** pairs to be added to or
   * replaced in the existing lexicon. The `pos` should be an array containing
   * pos tags, with the first one as the most frequently used POS. The `word` is
   * lower-cased before updating the internal lexicon.
   * @return {undefined} Nothing!
   * @throws {Error} if `lexicon` is not a valid JS object.
   * @example
   * myTagger.updateLexicon( { Obama: [ 'NNP' ] } );
  */
  var updateLexicon = function ( lexicon ) {
    if ( !helpers.validate.isObject( lexicon ) ) {
      throw Error( 'wink-pos-tagger/updateLexicon: lexicon must be an object, instead found: ' + JSON.stringify( lexicon ) );
    }
    // Update winkLexicon but with lower-cased key.
    for ( var key in lexicon ) winkLexicon[ key.toLowerCase() ] = lexicon[ key ]; // eslint-disable-line guard-for-in
  }; // updateLexicon()

  // ### tag
  /**
   *
   * Tags the input `tokens` with their **pos**.
   *
   * @param {object[]} tokens — to be pos tagged. They are array of objects and
   * must follow the [**`wink-tokenizer`**](http://winkjs.org/wink-tokenizer/)
   * standard.
   * @return {object[]} pos tagged `tokens`.
   * @example
   * // Get `tokenizer` method from the instance of `wink-tokenizer`.
   * var tokenize = require( 'wink-tokenizer' )().tokenize;
   * // Tag the tokenized sentence.
   * myTagger.tag( tokenize( 'I finished the whole pizza as I was feeling hungry.' ) );
   * // -> [ { value: 'I', tag: 'word', pos: 'PRP' },
   * //      { value: 'finished', tag: 'word', pos: 'VBD' },
   * //      { value: 'the', tag: 'word', pos: 'DT' },
   * //      { value: 'whole', tag: 'word', pos: 'JJ' },
   * //      { value: 'pizza', tag: 'word', pos: 'NN' },
   * //      { value: 'as', tag: 'word', pos: 'IN' },
   * //      { value: 'I', tag: 'word', pos: 'PRP' },
   * //      { value: 'was', tag: 'word', pos: 'VBD' },
   * //      { value: 'feeling', tag: 'word', pos: 'VBG' },
   * //      { value: 'hungry', tag: 'word', pos: 'JJ' },
   * //      { value: '.', tag: 'punctuation', pos: '.' } ]
  */
  var tag = function ( tokens ) {
    // Array of "array each possible pos" for each token.
    var poses = [];
    tokens.forEach( function ( t ) {
      poses.push( unigramPOSTagger( t, winkLexicon ) );
    } );
    applyContextRules( tokens, poses );
    return tokens;
  }; // tagTokens();

  var tagSentence = function ( sentence ) {
    if ( typeof sentence !== 'string' ) {
      throw Error( 'wink-pos-tagger: input sentence must be a string, instead found: ' + typeof sentence );
    }
    return tag( tokenize( sentence ) );
  }; // tagSentence()

  methods.updateLexicon = updateLexicon;
  methods.tag = tag;
  methods.tagSentence = tagSentence;

  return methods;
}; // posTagger()

module.exports = posTagger;
