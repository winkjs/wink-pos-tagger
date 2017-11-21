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
} );
