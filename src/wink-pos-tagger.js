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
var wl = require( 'wink-lemmatizer' );
var lemmatizeVBX = wl.lemmatizeVerb;
var lemmatizeNNX = wl.lemmatizeNoun;
var lemmatizeJJX = wl.lemmatizeAdjective;
// Load tokenizer, instanciate and get tokenize method; use default config.
var tokenize = require( 'wink-tokenizer' )().tokenize;
// Extract string normalization function from `wink-helpers`.
var normalize = helpers.string.normalize;

var lemmaExceptions = Object.create( null );
lemmaExceptions.ai = 'be';
lemmaExceptions.ca = 'can';
lemmaExceptions.sha = 'shall';
lemmaExceptions[ '\'ll' ] = lemmaExceptions.wo = 'will';
lemmaExceptions[ '\'ve' ] = 'have';
lemmaExceptions[ '\'m' ] = 'am';
lemmaExceptions[ '\'re' ] = 'be';
lemmaExceptions[ 'n\'t' ] = 'not';
lemmaExceptions[ '\'d' ] = 'would';

// ### posTagger
/**
 *
 * Creates an instance of {@link Tagger}.
 *
 * @return {Tagger} object conatining set of API methods for pos-tagging.
 * @example
 * // Load wink tokenizer.
 * var tagger = require( 'wink-pos-tagger' );
 * // Create your instance of wink tokenizer.
 * var myTagger = posTagger();
*/
var posTagger = function ( ) {

  /**
  * @classdesc Tagger class
  * @class Tagger
  * @hideconstructor
  */
  var methods = Object.create( null );

  // ### updateLexicon
  /**
   *
   * Updates the internal lexicon using the input `lexicon`. If a word/pos pair
   * is found in the internal lexicon then it's value is updated with the new pos;
   * otherwise it added.
   *
   * @method Tagger#updateLexicon
   * @param {object} lexicon containing **`word/pos`** pairs to be added to or
   * replaced in the existing lexicon. The `pos` should be an array containing
   * pos tags, with the first one as the most frequently used POS. The `word` is
   * normalized before updating the internal lexicon.
   * @return {undefined} Nothing!
   * @throws {Error} if `lexicon` is not a valid JS object.
   * @example
   * myTagger.updateLexicon( { Obama: [ 'NNP' ] } );
  */
  var updateLexicon = function ( lexicon ) {
    if ( !helpers.validate.isObject( lexicon ) ) {
      throw Error( 'wink-pos-tagger/updateLexicon: lexicon must be an object, instead found: ' + JSON.stringify( lexicon ) );
    }
    // Update winkLexicon but with **normalized** key.
    for ( var key in lexicon ) winkLexicon[ normalize( key ) ] = lexicon[ key ]; // eslint-disable-line guard-for-in
  }; // updateLexicon()

  // ### defineConfig
  /**
   *
   * This API has no effect. It has been maintained for compatibility purpose.
   * The `wink-tokenizer` will now always add **lemma** and **normal** forms.
   * Note, lemmas are added only for **nouns** (excluding proper noun), **verbs** and
   * **adjectives**.
   *
   * @method Tagger#defineConfig
   * @return {object} always as `{ lemma: true, normal: true }`.
   * @example
   * // There will not be any effect:
   * var myTagger.defineConfig( { lemma: false } );
   * // -> { lemma: true, normal: true }
  */
  var defineConfig = function ( ) {
    // Return a copy of configuration object.
    return ( JSON.parse( JSON.stringify( { lemma: true, normal: true } ) ) );
  }; // defineConfig()

  // ### lemmatize
  /**
   *
   * This API has no effect. It has been maintained for compatibility purpose.
   * The `wink-tokenizer` will now always add **lemma** and **normal** forms.
   *
   * @method Tagger#lemmatize
   * @param {object[]} tokens to be lemmatized.
   * @return {object[]} lemmatized tokens.
   * @private
  */
  var lemmatize = function ( tokens ) {
    var t, w;
    var lemma;
    for ( let i = 0, imax = tokens.length; i < imax; i += 1 ) {
      t = tokens[ i ];
      w = t.normal;
      // First handle exceptions arising out of contractions.
      lemma = lemmaExceptions[ w ];
      if ( lemma ) {
        t.lemma = lemma;
      } else {
        // Otherwise use lemmatizer.
        switch ( t.pos[ 0 ] ) {
          case 'J':
            t.lemma = ( t.pos.length > 2 ) ? lemmatizeJJX( w ) : w;
            break;
          case 'V':
            t.lemma = ( t.pos.length > 2 ) ?
                        ( ( t.normal === '\'s') ? 'be' : lemmatizeVBX( w ) ) :
                        w;
            break;
          case 'N':
            // No lemmatization of NNPs please!
            if ( t.pos !== 'NNP' ) t.lemma = ( t.pos.length > 2 ) ? lemmatizeNNX( w ) : w;
            break;
          case 'M':
            t.lemma = lemmatizeVBX( w );
            break;
          default:
            // Do nothing!
        } // swtich
      } // if
    }

    return tokens;
  }; // lemmatize()

  // ### tag
  /**
   *
   * Tags the input `tokens` with their **pos**.
   *
   * @method Tagger#tag
   * @param {object[]} tokens to be pos tagged. They are array of objects and
   * must follow the [**`wink-tokenizer`**](http://winkjs.org/wink-tokenizer/)
   * standard.
   * @return {object[]} pos tagged `tokens`.
   * @example
   * // Get `tokenizer` method from the instance of `wink-tokenizer`.
   * var tokenize = require( 'wink-tokenizer' )().tokenize;
   * // Tag the tokenized sentence.
   * myTagger.tag( tokenize( 'I ate the entire pizza as I was feeling hungry.' ) );
   * // -> [ { value: 'I', tag: 'word', normal: 'i', pos: 'PRP' },
   * //      { value: 'ate', tag: 'word', normal: 'ate', pos: 'VBD', lemma: 'eat' },
   * //      { value: 'the', tag: 'word', normal: 'the', pos: 'DT' },
   * //      { value: 'entire', tag: 'word', normal: 'entire', pos: 'JJ', lemma: 'entire' },
   * //      { value: 'pizza', tag: 'word', normal: 'pizza', pos: 'NN', lemma: 'pizza' },
   * //      { value: 'as', tag: 'word', normal: 'as', pos: 'IN' },
   * //      { value: 'I', tag: 'word', normal: 'i', pos: 'PRP' },
   * //      { value: 'was', tag: 'word', normal: 'was', pos: 'VBD', lemma: 'be' },
   * //      { value: 'feeling', tag: 'word', normal: 'feeling', pos: 'VBG', lemma: 'feel' },
   * //      { value: 'hungry', tag: 'word', normal: 'hungry', pos: 'JJ', lemma: 'hungry' },
   * //      { value: '.', tag: 'punctuation', normal: '.', pos: '.' } ]
  */
  var tag = function ( tokens ) {
    // Array of "array each possible pos" for each token.
    var poses = [];
    // Temp token & word.
    var t;
    for ( let i = 0, imax = tokens.length; i < imax; i += 1 ) {
      t = tokens[ i ];
      // Normalize, if configuration demands it!
      t.normal = normalize( t.value );
      poses.push( unigramPOSTagger( t, winkLexicon ) );
    }
    applyContextRules( tokens, poses );
    // Lemmatize, if configuration demands...
    lemmatize( tokens );
    return tokens;
  }; // tagTokens();

  // ### tagSentence
  /**
   *
   * Tags the input `sentence` with their **pos**.
   *
   * @method Tagger#tagSentence
   * @param {string} sentence to be pos tagged.
   * @return {object[]} pos tagged `tokens.`
   * @throws {Error} if `sentence` is not a valid string.
   * @example
   * myTagger.tagSentence( 'A bear just crossed the road.' );
   * // -> [ { value: 'A', tag: 'word', normal: 'a', pos: 'DT' },
   * //      { value: 'bear', tag: 'word', normal: 'bear', pos: 'NN', lemma: 'bear' },
   * //      { value: 'just', tag: 'word', normal: 'just', pos: 'RB' },
   * //      { value: 'crossed', tag: 'word', normal: 'crossed', pos: 'VBD', lemma: 'cross' },
   * //      { value: 'the', tag: 'word', normal: 'the', pos: 'DT' },
   * //      { value: 'road', tag: 'word', normal: 'road', pos: 'NN', lemma: 'road' },
   * //      { value: '.', tag: 'punctuation', normal: '.', pos: '.' } ]
   * //
   * //
   * myTagger.tagSentence( 'I will bear all the expenses.' );
   * // -> [ { value: 'I', tag: 'word', normal: 'i', pos: 'PRP' },
   * //      { value: 'will', tag: 'word', normal: 'will', pos: 'MD', lemma: 'will' },
   * //      { value: 'bear', tag: 'word', normal: 'bear', pos: 'VB', lemma: 'bear' },
   * //      { value: 'all', tag: 'word', normal: 'all', pos: 'PDT' },
   * //      { value: 'the', tag: 'word', normal: 'the', pos: 'DT' },
   * //      { value: 'expenses', tag: 'word', normal: 'expenses', pos: 'NNS', lemma: 'expense' },
   * //      { value: '.', tag: 'punctuation', normal: '.', pos: '.' } ]
  */
  var tagSentence = function ( sentence ) {
    if ( typeof sentence !== 'string' ) {
      throw Error( 'wink-pos-tagger: input sentence must be a string, instead found: ' + typeof sentence );
    }
    return tag( tokenize( sentence ) );
  }; // tagSentence()

  methods.updateLexicon = updateLexicon;
  methods.tag = tag;
  methods.tagSentence = tagSentence;
  methods.defineConfig = defineConfig;

  return methods;
}; // posTagger()

module.exports = posTagger;
