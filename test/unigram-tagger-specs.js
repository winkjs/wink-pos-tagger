/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var tag = require( '../src/unigram-tagger.js' );
var lexicon = require( '../src/lexicon/lexicon.js' );
// var tk = require( 'wink-tokenizer' )().tokenize;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'unigramPOSTagger() test cycle', function () {
  it( 'tag a mention', function () {
      expect( tag( { value: '@superman', tag: 'mention' }, lexicon ) ).to.deep.equal( { value: '@superman', tag: 'mention', pos: 'NNP' } );
  } );

  it( 'tag a punctuation', function () {
      expect( tag( { value: ';', tag: 'punctuation' }, lexicon ) ).to.deep.equal( { value: ';', tag: 'punctuation', pos: ':' } );
  } );

  it( 'tag a word', function () {
      expect( tag( { value: 'send', tag: 'word' }, lexicon ) ).to.deep.equal( { value: 'send', tag: 'word', pos: 'VB' } );
  } );

  it( 'tag a number', function () {
      expect( tag( { value: '2', tag: 'number' }, lexicon ) ).to.deep.equal( { value: '2', tag: 'number', pos: 'CD' } );
  } );

  it( 'tag an email', function () {
      expect( tag( { value: 'r2d2@gmail.com', tag: 'email' }, lexicon ) ).to.deep.equal( { value: 'r2d2@gmail.com', tag: 'email', pos: 'NNP' } );
  } );

  it( 'tag a time', function () {
      expect( tag( { value: '2pm', tag: 'time' }, lexicon ) ).to.deep.equal( { value: '2pm', tag: 'time', pos: 'JJ' } );
  } );

  it( 'tag an emoticon', function () {
      expect( tag( { value: ':)', tag: 'emoticon' }, lexicon ) ).to.deep.equal( { value: ':)', tag: 'emoticon', pos: 'M' } );
  } );

  it( 'tag an emoji', function () {
      expect( tag( { value: '🎉', tag: 'emoji' }, lexicon ) ).to.deep.equal( { value: '🎉', tag: 'emoji', pos: 'M' } );
  } );

  it( 'tag an url', function () {
      expect( tag( { value: 'http://fun.com', tag: 'url' }, lexicon ) ).to.deep.equal( { value: 'http://fun.com', tag: 'url', pos: 'NN' } );
  } );

  it( 'tag a hashtag', function () {
      expect( tag( { value: '#fun', tag: 'hashtag' }, lexicon ) ).to.deep.equal( { value: '#fun', tag: 'hashtag', pos: 'HT' } );
  } );

  it( 'tag an eos punctuation', function () {
      expect( tag( { value: '!', tag: 'punctuation' }, lexicon ) ).to.deep.equal( { value: '!', tag: 'punctuation', pos: '.' } );
  } );

  it( 'tag an unknown un-adjective', function () {
      expect( tag( { value: 'uneasy', tag: 'word' }, lexicon ) ).to.deep.equal( { value: 'uneasy', tag: 'word', pos: 'JJ' } );
  } );

  it( 'tag an unknown plural noun', function () {
      expect( tag( { value: 'chairpersons', tag: 'word' }, lexicon ) ).to.deep.equal( { value: 'chairpersons', tag: 'word', pos: 'NNS' } );
  } );

  it( 'tag an unknown adjective', function () {
      expect( tag( { value: 'ludicrous', tag: 'word' }, lexicon ) ).to.deep.equal( { value: 'ludicrous', tag: 'word', pos: 'JJ' } );
  } );
} );
