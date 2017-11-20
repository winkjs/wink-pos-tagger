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
var winkLexicon = require( './lexicon/lexicon.js' );
var unigramPOSTagger = require( './unigram-tagger.js' );
var applyContextRules = require( './rules-engine.js' );

// ### posTagger
/**
 *
 * Creates an instance of **`wink-pos-tagger`**.
 *
 * @return {methods} object conatining set of API methods for pos-tagging a sentence,
 * and for defining related configuration.
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
   * replaced in the existing lexicon.
   * @return {undefined} Nothing!
   * @throws {Error} if `lexicon` is not a valid JS object.
   * @example
   * updateLexicon( { Obama: 'NNP' } );
  */
  var updateLexicon = function ( lexicon ) {
    if ( !helpers.validate.isObject( lexicon ) ) {
      throw Error( 'wink-pos-tagger/updateLexicon: lexicon must be an object, instead found: ' + JSON.stringify( lexicon ) );
    }
    Object.assign( winkLexicon, lexicon );
  }; // updateLexicon()

  var tag = function ( tokens ) {
    tokens.forEach( function ( t ) {
      unigramPOSTagger( t, winkLexicon );
    } );
    applyContextRules( tokens );
    return tokens;
  }; // tagTokens();

  methods.updateLexicon = updateLexicon;
  methods.tag = tag;

  return methods;
}; // posTagger()

module.exports = posTagger;
