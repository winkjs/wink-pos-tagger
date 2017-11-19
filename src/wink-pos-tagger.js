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
var winkLexicon = require( './wink-lexicon.js' );
var unigramPOSTagger = require( './unigram-tagger.js' );

var posTagger = function ( ) {

  // Returned!
  var methods = Object.create( null );

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

    return tokens;
  }; // tagTokens();

  methods.updateLexicon = updateLexicon;
  methods.tag = tag;

  return methods;
}; // posTagger()

module.exports = posTagger;
