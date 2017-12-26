/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var tagger = require( '../src/wink-pos-tagger.js' )();
var tk = require( 'wink-tokenizer' )().tokenize;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

var tag = tagger.tag;
describe( 'wink-pos-tagger test cycle', function () {
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

describe( 'test range rule tagging "bear" differently', function () {
  it( 'A bear just crossed the road', function () {
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
