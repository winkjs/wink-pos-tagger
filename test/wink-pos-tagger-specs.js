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
/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var tagger = require( '../src/wink-pos-tagger.js' )();
var tk = require( 'wink-tokenizer' )().tokenize;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

var tag = tagger.tag;
var tagSentence = tagger.tagSentence;
var defineConfig = tagger.defineConfig;

describe( 'wink-pos-tagger test cycle', function () {
  // It turns of the lemma & normal ensuring the current test cases are not
  // required to be updated after issue #9.
  defineConfig( {} );
  it( 'tag a simple sentence', function () {
      var output = [ { value: 'this', tag: 'word', pos: 'DT' },
                     { value: 'is', tag: 'word', pos: 'VBZ' },
                     { value: 'a', tag: 'word', pos: 'DT' },
                     { value: 'simple', tag: 'word', pos: 'JJ' },
                     { value: 'sentence', tag: 'word', pos: 'NN' } ];
      expect( tag( tk( 'this is a simple sentence' ) ) ).to.deep.equal( output );
  } );

  it( 'tag a little more complex sentence', function () {
      var output = [ { value: 'The', tag: 'word', pos: 'DT' },
                     { value: 'horses', tag: 'word', pos: 'NNS' },
                     { value: 'were', tag: 'word', pos: 'VBD' },
                     { value: 'broken', tag: 'word', pos: 'VBN' },
                     { value: 'in', tag: 'word', pos: 'IN' },
                     { value: 'and', tag: 'word', pos: 'CC' },
                     { value: 'ridden', tag: 'word', pos: 'VBN' },
                     { value: 'in', tag: 'word', pos: 'IN' },
                     { value: 'two', tag: 'word', pos: 'CD' },
                     { value: 'weeks', tag: 'word', pos: 'NNS' },
                     { value: '.', tag: 'punctuation', pos: '.' } ];
      expect( tag( tk( 'The horses were broken in and ridden in two weeks.' ) ) ).to.deep.equal( output );
  } );

  it( 'tag a sentence triggering delta rule', function () {
      var output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                     { value: 'would', tag: 'word', pos: 'MD' },
                     { value: 'like', tag: 'word', pos: 'VB' },
                     { value: 'to', tag: 'word', pos: 'TO' },
                     { value: 'eat', tag: 'word', pos: 'VB' },
                     { value: 'a', tag: 'word', pos: 'DT' },
                     { value: 'banana', tag: 'word', pos: 'NN' },
                     { value: '.', tag: 'punctuation', pos: '.' } ];
      expect( tag( tk( 'I would like to eat a banana.' ) ) ).to.deep.equal( output );
  } );

  it( 'check WDT rule: seems so Indian English!', function () {
      var output = [ { value: 'what', tag: 'word', pos: 'WDT' },
                     { value: 'rachna', tag: 'word', pos: 'NN' } ];
      expect( tag( tk( 'what rachna' ) ) ).to.deep.equal( output );
  } );

  it( 'check am/is/are followed by ...ing', function () {
      var output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                     { value: 'am', tag: 'word', pos: 'VBP' },
                     { value: 'feeling', tag: 'word', pos: 'VBG' } ];
      expect( tag( tk( 'I am feeling' ) ) ).to.deep.equal( output );
      output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                 { value: 'have', tag: 'word', pos: 'VBP' },
                 { value: 'a', tag: 'word', pos: 'DT' },
                 { value: 'feeling', tag: 'word', pos: 'NN' } ];
      expect( tag( tk( 'I have a feeling' ) ) ).to.deep.equal( output );
  } );
} );

describe( 'wink-pos-tagger entity test cycle', function () {
  it( 'tag a sentence with entity', function () {
      var output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                     { value: 'live', tag: 'word', pos: 'VBP' },
                     { value: 'in', tag: 'word', pos: 'IN' },
                     { value: 'denmark', tag: 'word', pos: 'NNP', entity: 'location' } ];
      expect( tagger.tag( [
                            { value: 'I', tag: 'word' },
                            { value: 'live', tag: 'word' },
                            { value: 'in', tag: 'word' },
                            { value: 'denmark', tag: 'word', pos: 'NNP', entity: 'location' } ]
       ) ).to.deep.equal( output );
  } );

  it( 'tag the same sentence without pos undefined at NER time', function () {
      var output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                     { value: 'live', tag: 'word', pos: 'VBP' },
                     { value: 'in', tag: 'word', pos: 'IN' },
                     { value: 'denmark', tag: 'word', pos: 'NN', entity: 'location' } ];
      expect( tagger.tag( [
                            { value: 'I', tag: 'word' },
                            { value: 'live', tag: 'word' },
                            { value: 'in', tag: 'word' },
                            { value: 'denmark', tag: 'word', entity: 'location' } ]
       ) ).to.deep.equal( output );
  } );

} );

describe( 'wink-pos-tagger update lexicon test cycle', function () {
  it( 'tag a I eat', function () {
      var output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                     { value: 'eat', tag: 'word', pos: 'VBP' } ];
      expect( tagger.tag( tk( 'I eat' ) ) ).to.deep.equal( output );
  } );

  it( 'update lexicon incorrectly throws error', function () {
      expect( tagger.updateLexicon.bind( null ) ).to.throw( 'wink-pos-tagger/updateLexicon: lexicon must be an object, instead found: undefined' );
  } );

  it( 'update lexicon to make eat as noun & again tag', function () {
      var output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                     { value: 'eat', tag: 'word', pos: 'NN' } ];
      expect( tagger.updateLexicon( { EAT: [ 'NN' ] } ) ).to.deep.equal( undefined );
      expect( tagger.tag( tk( 'I eat' ) ) ).to.deep.equal( output );
  } );
} );

describe( 'test range rule tagging "bear" differently', function () {
  it( 'A bear just crossed the road', function () {
      var output = [ { value: 'A', tag: 'word', pos: 'DT' },
                     { value: 'bear', tag: 'word', pos: 'NN' },
                     { value: 'just', tag: 'word', pos: 'RB' },
                     { value: 'crossed', tag: 'word', pos: 'VBD' },
                     { value: 'the', tag: 'word', pos: 'DT' },
                     { value: 'road', tag: 'word', pos: 'NN' } ];
      expect( tag( tk( 'A bear just crossed the road' ) ) ).to.deep.equal( output );
  } );

  it( 'I will bear the expenses', function () {
      var output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                     { value: 'will', tag: 'word', pos: 'MD' },
                     { value: 'bear', tag: 'word', pos: 'VB' },
                     { value: 'the', tag: 'word', pos: 'DT' },
                     { value: 'expense', tag: 'word', pos: 'NN' } ];
      expect( tag( tk( 'I will bear the expense' ) ) ).to.deep.equal( output );
  } );
} );

describe( 'test range rule tagging "point" differently', function () {
  it( 'The pencil has a sharp point...', function () {
      var output = [ { value: 'The', tag: 'word', pos: 'DT' },
                     { value: 'pencil', tag: 'word', pos: 'NN' },
                     { value: 'has', tag: 'word', pos: 'VBZ' },
                     { value: 'a', tag: 'word', pos: 'DT' },
                     { value: 'sharp', tag: 'word', pos: 'JJ' },
                     { value: 'point', tag: 'word', pos: 'NN' },
                     { value: '.', tag: 'punctuation', pos: '.' },
                     { value: 'It', tag: 'word', pos: 'PRP' },
                     { value: 'is', tag: 'word', pos: 'VBZ' },
                     { value: 'not', tag: 'word', pos: 'RB' },
                     { value: 'polite', tag: 'word', pos: 'JJ' },
                     { value: 'to', tag: 'word', pos: 'TO' },
                     { value: 'point', tag: 'word', pos: 'VB' },
                     { value: 'at', tag: 'word', pos: 'IN' },
                     { value: 'people', tag: 'word', pos: 'NNS' },
                     { value: '.', tag: 'punctuation', pos: '.' } ];
      expect( tag( tk( 'The pencil has a sharp point. It is not polite to point at people.' ) ) ).to.deep.equal( output );
  } );
} );

describe( 'tagSentence basic test', function () {
  it( 'tag a sentence', function () {
      var output = [ { value: 'The', tag: 'word', pos: 'DT' },
                     { value: 'pencil', tag: 'word', pos: 'NN' },
                     { value: 'has', tag: 'word', pos: 'VBZ' },
                     { value: 'a', tag: 'word', pos: 'DT' },
                     { value: 'sharp', tag: 'word', pos: 'JJ' },
                     { value: 'point', tag: 'word', pos: 'NN' },
                     { value: '.', tag: 'punctuation', pos: '.' },
                     { value: 'It', tag: 'word', pos: 'PRP' },
                     { value: 'is', tag: 'word', pos: 'VBZ' },
                     { value: 'not', tag: 'word', pos: 'RB' },
                     { value: 'polite', tag: 'word', pos: 'JJ' },
                     { value: 'to', tag: 'word', pos: 'TO' },
                     { value: 'point', tag: 'word', pos: 'VB' },
                     { value: 'at', tag: 'word', pos: 'IN' },
                     { value: 'people', tag: 'word', pos: 'NNS' },
                     { value: '.', tag: 'punctuation', pos: '.' } ];
      expect( tagSentence( 'The pencil has a sharp point. It is not polite to point at people.' ) ).to.deep.equal( output );
  } );

  it( 'tag an blank sentence', function () {
      var output = [ ];
      expect( tagSentence( '' ) ).to.deep.equal( output );
  } );

  it( 'should throw error with undefined sentence', function () {
      expect( tagSentence.bind( null ) ).to.throw( 'wink-pos-tagger: input sentence must be a string, instead found: undefined' );
  } );
} );

describe( 'defineConfig basic test', function () {
  it( 'define lemma: false', function () {
      expect( defineConfig( { lemma: false } ) ).to.deep.equal( { lemma: false, normal: true } );
  } );

  it( 'define all properties as false', function () {
      expect( defineConfig( { } ) ).to.deep.equal( { lemma: false, normal: false } );
  } );

  it( 'test addition of normal in tokens', function () {
    var output = [ { value: 'Nestlé', tag: 'word', pos: 'NN', normal: 'nestle' },
               { value: 'is', tag: 'word', pos: 'VBZ', normal: 'is' },
               { value: 'an', tag: 'word', pos: 'DT', normal: 'an' },
               { value: 'organization', tag: 'word', pos: 'NN', normal: 'organization' } ];

    expect( defineConfig( { lemma: false } ) ).to.deep.equal( { lemma: false, normal: true } );
    expect( tagSentence( 'Nestlé is an organization' ) ).to.deep.equal( output );
  } );

  it( 'test with lemma/normal turned on', function () {
    var output = [ { value: 'He', tag: 'word', normal: 'he', pos: 'PRP' },
                   { value: 'will', tag: 'word', normal: 'will', pos: 'MD', lemma: 'will' },
                   { value: 'be', tag: 'word', normal: 'be', pos: 'VB', lemma: 'be' },
                   { value: 'trying', tag: 'word', normal: 'trying', pos: 'VBG', lemma: 'try' },
                   { value: 'to', tag: 'word', normal: 'to', pos: 'TO' },
                   { value: 'fish', tag: 'word', normal: 'fish', pos: 'VB', lemma: 'fish' },
                   { value: 'fish', tag: 'word', normal: 'fish', pos: 'NN', lemma: 'fish' },
                   { value: 'in', tag: 'word', normal: 'in', pos: 'IN' },
                   { value: 'the', tag: 'word', normal: 'the', pos: 'DT' },
                   { value: 'lake', tag: 'word', normal: 'lake', pos: 'NN', lemma: 'lake' },
                   { value: '.', tag: 'punctuation', normal: '.', pos: '.' } ];

    expect( defineConfig( { lemma: true, normal: true } ) ).to.deep.equal( { lemma: true, normal: true } );
    expect( tagSentence( 'He will be trying to fish fish in the lake.' ) ).to.deep.equal( output );
  } );

  it( 'test with lemma: true/normal: false turned on', function () {
    var output = [ { value: 'He', tag: 'word', pos: 'PRP' },
                   { value: 'will', tag: 'word', pos: 'MD', lemma: 'will' },
                   { value: 'be', tag: 'word', pos: 'VB', lemma: 'be' },
                   { value: 'trying', tag: 'word', pos: 'VBG', lemma: 'try' },
                   { value: 'to', tag: 'word', pos: 'TO' },
                   { value: 'fish', tag: 'word', pos: 'VB', lemma: 'fish' },
                   { value: 'fish', tag: 'word', pos: 'NN', lemma: 'fish' },
                   { value: 'in', tag: 'word', pos: 'IN' },
                   { value: 'the', tag: 'word', pos: 'DT' },
                   { value: 'lake', tag: 'word', pos: 'NN', lemma: 'lake' },
                   { value: '.', tag: 'punctuation', pos: '.' } ];

    expect( defineConfig( { lemma: true, normal: false } ) ).to.deep.equal( { lemma: true, normal: false } );
    expect( tagSentence( 'He will be trying to fish fish in the lake.' ) ).to.deep.equal( output );
  } );

  it( 'tags a sentence containing &', function () {
    var output = [ { value: 'He', tag: 'word', pos: 'PRP' },
                   { value: '&', tag: 'symbol', pos: 'CC' },
                   { value: 'his', tag: 'word', pos: 'PRP$' },
                   { value: 'friend', tag: 'word', pos: 'NN' },
                   { value: 'are', tag: 'word', pos: 'VBP' },
                   { value: 'walking', tag: 'word', pos: 'VBG' } ];

    expect( defineConfig( { lemma: false, normal: false } ) ).to.deep.equal( { lemma: false, normal: false } );
    expect( tagSentence( 'He & his friend are walking' ) ).to.deep.equal( output );
  } );

  it( 'tags a sentence containing % & #', function () {
    var output = [ { value: 'I', tag: 'word', pos: 'PRP' },
                   { value: 'earned', tag: 'word', pos: 'VBD' },
                   { value: '10', tag: 'number', pos: 'CD' },
                   { value: '%', tag: 'symbol', pos: 'NN' },
                   { value: 'bonus', tag: 'word', pos: 'NN' },
                   { value: 'in', tag: 'word', pos: 'IN' },
                   { value: 'Q', tag: 'word', pos: 'NN' },
                   { value: '#', tag: 'symbol', pos: 'NN' },
                   { value: '3', tag: 'number', pos: 'CD' } ];

    expect( defineConfig( { lemma: false, normal: false } ) ).to.deep.equal( { lemma: false, normal: false } );
    expect( tagSentence( 'I earned 10% bonus in Q#3' ) ).to.deep.equal( output );
  } );
} );
