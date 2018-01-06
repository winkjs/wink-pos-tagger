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
var normalize = require( './normalize-token-value.js' );
var lemmatizeVBX = require( './lemmatize-vbx.js' );
var lemmatizeNNX = require( './lemmatize-nnx.js' );
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
  // Configuration parameters.
  var cfgParams = [
    'lemma',
    'normal'
  ];
  // Configuration & it's default values.
  var cfg = Object.create( null );
  cfg.lemma = true;
  cfg.normal = true;

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

  // ### defineConfig
  /**
   *
   * Configures the **properties** to be added to each token
   * apart from `pos.` The properties are **lemma** and **normal**. Note by
   * default, all the properties are added to the token.
   *
   * @param {object} config — It defines 0 or more properties to be added or removed.
   * A `true` or `undefined` value for a property ensures it's addition to each token;
   * whereas false value means that property will not be added.
   *
   * *An empty config object is equivalent to setting all properties to `false.`*
   *
   * The table below gives the name of each property and it's description including
   * examples.
   * @param {boolean} [config.normal=true] normalized value is added, referenced by key **`normal`.**
   * @param {boolean} [config.lemma=true] lemmatized value is added, referenced by key **`lemma`.**
   * @return {object} configuration defined.
   * @example
   * // Do not add lemma of the "value" in the token.
   * var myTagger.defineConfig( { lemma: false } );
   * // -> { lemma: false, normal: true }
   *
   * // Do not any properties to the token.
   * var myTagger.defineConfig( {} );
   * // -> { lemma: false, normal: false }
  */
  var defineConfig = function ( config ) {
    if ( typeof config === 'object' && Object.keys( config ).length ) {
      cfgParams.forEach( function ( cp ) {
        // Means `undefined` & `null` values are taken as true; otherwise
        // standard **truthy** and **falsy** interpretation applies!!
        cfg[ cp ] = ( config[ cp ] === undefined || config[ cp ] === null || !!config[ cp ] );
      } );
    } else {
      cfgParams.forEach( function ( cp ) {
        cfg[ cp ] = false;
      } );
    }
    // Return a copy of configuration object.
    return ( JSON.parse( JSON.stringify( cfg ) ) );
  }; // defineConfig()

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
    // Temp token.
    var t;
    for ( let i = 0, imax = tokens.length; i < imax; i += 1 ) {
      t = tokens[ i ];
      // Normalize, if configuration demands it!
      if ( cfg.normal ) t.normal = normalize( t.value );
      poses.push( unigramPOSTagger( t, winkLexicon ) );
    }
    applyContextRules( tokens, poses );
    // Lemmatize, if configuration demands...
    if ( cfg.lemma ) {
      for ( let i = 0, imax = tokens.length; i < imax; i += 1 ) {
        t = tokens[ i ];
        switch ( t.pos[ 0 ] ) {
          case 'V':
              t.lemma = lemmatizeVBX( t.normal || normalize( t.value ) );
            break;
          case 'N':
              t.lemma = lemmatizeNNX( t.normal || normalize( t.value ) );
            break;
          case 'M':
              t.lemma = lemmatizeVBX( t.normal || normalize( t.value ) );
            break;
          default:

        }
      }
    }
    return tokens;
  }; // tagTokens();

  // ### tagSentence
  /**
   *
   * Tags the input `sentence` with their **pos**.
   *
   * @param {string} sentence — to be pos tagged.
   * @return {object[]} pos tagged `tokens.`
   * @throws {Error} if `sentence` is not a valid string.
   * @example
   * myTagger.tagSentence( 'A bear just crossed the road. I will bear all the expenses.' );
   * // -> [ { value: 'A', tag: 'word', pos: 'DT' },
   * //      { value: 'bear', tag: 'word', pos: 'NN' },
   * //      { value: 'just', tag: 'word', pos: 'RB' },
   * //      { value: 'crossed', tag: 'word', pos: 'VBD' },
   * //      { value: 'the', tag: 'word', pos: 'DT' },
   * //      { value: 'road', tag: 'word', pos: 'NN' },
   * //      { value: '.', tag: 'punctuation', pos: '.' },
   * //      { value: 'I', tag: 'word', pos: 'PRP' },
   * //      { value: 'will', tag: 'word', pos: 'MD' },
   * //      { value: 'bear', tag: 'word', pos: 'VB' },
   * //      { value: 'all', tag: 'word', pos: 'PDT' },
   * //      { value: 'the', tag: 'word', pos: 'DT' },
   * //      { value: 'expenses', tag: 'word', pos: 'NNS' },
   * //      { value: '.', tag: 'punctuation', pos: '.' } ]
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
