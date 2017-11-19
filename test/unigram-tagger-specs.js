/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var tag = require( '../src/unigram-tagger.js' );
var lexicon = require( '../src/lexicon/lexicon.js' );
// var tk = require( 'wink-tokenizer' )().tokenize;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'basic test cycle', function () {
  it( 'tag a mention', function () {
      expect( tag( { token: '@superman', tag: 'mention' }, lexicon ) ).to.deep.equal( { token: '@superman', tag: 'mention', pos: 'NNP' } );
  } );

  it( 'tag a punctuation', function () {
      expect( tag( { token: ';', tag: 'punctuation' }, lexicon ) ).to.deep.equal( { token: ';', tag: 'punctuation', pos: ':' } );
  } );

  it( 'tag a word', function () {
      expect( tag( { token: 'send', tag: 'word' }, lexicon ) ).to.deep.equal( { token: 'send', tag: 'word', pos: 'VB' } );
  } );

  it( 'tag a number', function () {
      expect( tag( { token: '2', tag: 'number' }, lexicon ) ).to.deep.equal( { token: '2', tag: 'number', pos: 'CD' } );
  } );

  it( 'tag an email', function () {
      expect( tag( { token: 'r2d2@gmail.com', tag: 'email' }, lexicon ) ).to.deep.equal( { token: 'r2d2@gmail.com', tag: 'email', pos: 'NNP' } );
  } );

  it( 'tag a time', function () {
      expect( tag( { token: '2pm', tag: 'time' }, lexicon ) ).to.deep.equal( { token: '2pm', tag: 'time', pos: 'JJ' } );
  } );

  it( 'tag an emoticon', function () {
      expect( tag( { token: ':)', tag: 'emoticon' }, lexicon ) ).to.deep.equal( { token: ':)', tag: 'emoticon', pos: 'M' } );
  } );

  it( 'tag an emoji', function () {
      expect( tag( { token: '🎉', tag: 'emoji' }, lexicon ) ).to.deep.equal( { token: '🎉', tag: 'emoji', pos: 'M' } );
  } );

  it( 'tag an url', function () {
      expect( tag( { token: 'http://fun.com', tag: 'url' }, lexicon ) ).to.deep.equal( { token: 'http://fun.com', tag: 'url', pos: 'NN' } );
  } );

  it( 'tag a hashtag', function () {
      expect( tag( { token: '#fun', tag: 'hashtag' }, lexicon ) ).to.deep.equal( { token: '#fun', tag: 'hashtag', pos: 'HT' } );
  } );

  it( 'tag an eos punctuation', function () {
      expect( tag( { token: '!', tag: 'punctuation' }, lexicon ) ).to.deep.equal( { token: '!', tag: 'punctuation', pos: '.' } );
  } );

  it( 'tag an unknown un-adjective', function () {
      expect( tag( { token: 'uneasy', tag: 'word' }, lexicon ) ).to.deep.equal( { token: 'uneasy', tag: 'word', pos: 'JJ' } );
  } );

  it( 'tag an unknown plural noun', function () {
      expect( tag( { token: 'chairpersons', tag: 'word' }, lexicon ) ).to.deep.equal( { token: 'chairpersons', tag: 'word', pos: 'NNS' } );
  } );

  it( 'tag an unknown adjective', function () {
      expect( tag( { token: 'ludicrous', tag: 'word' }, lexicon ) ).to.deep.equal( { token: 'ludicrous', tag: 'word', pos: 'JJ' } );
  } );
} );
