//     wink-pos-tagger
//     English Part-of-speech (POS) tagger
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-pos-tagger”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var tag = require( '../src/unigram-tagger.js' );
var lexicon = require( 'wink-lexicon/src/lexicon.js' );
// var tk = require( 'wink-tokenizer' )().tokenize;

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

describe( 'unigramPOSTagger() test cycle', function () {
  it( 'tag a mention', function () {
      expect( tag( { value: '@superman', tag: 'mention', normal: '@superman' }, lexicon ) ).to.deep.equal( [ 'NNP' ] );
  } );

  it( 'tag a punctuation', function () {
    // tag a known pos
    expect( tag( { value: ';', tag: 'punctuation', normal: ';' }, lexicon ) ).to.deep.equal( [ ':' ] );
    // tag an unknown pos
    expect( tag( { value: '/', tag: 'punctuation', normal: '/' }, lexicon ) ).to.deep.equal( [ '/' ] );
  } );

  it( 'tag a word', function () {
    expect( tag( { value: 'send', tag: 'word', normal: 'send' }, lexicon ) ).to.deep.equal( [ 'VB', 'VBP' ] );
  } );

  it( 'tag a number', function () {
    expect( tag( { value: '2', tag: 'number', normal: '2' }, lexicon ) ).to.deep.equal( [ 'CD' ] );
  } );

  it( 'tag an email', function () {
    expect( tag( { value: 'r2d2@gmail.com', tag: 'email', normal: 'r2d2@gmail.com' }, lexicon ) ).to.deep.equal( [ 'NNP' ] );
  } );

  it( 'tag a time', function () {
    expect( tag( { value: '2pm', tag: 'time', normal: '2pm' }, lexicon ) ).to.deep.equal( [ 'JJ' ] );
  } );

  it( 'tag an emoticon', function () {
    expect( tag( { value: ':)', tag: 'emoticon', normal: ':)' }, lexicon ) ).to.deep.equal( [ 'M' ] );
  } );

  it( 'tag an emoji', function () {
    expect( tag( { value: '🎉', tag: 'emoji', normal: '🎉' }, lexicon ) ).to.deep.equal( [ 'M' ] );
  } );

  it( 'tag an url', function () {
    expect( tag( { value: 'http://fun.com', tag: 'url', normal: 'http://fun.com' }, lexicon ) ).to.deep.equal( [ 'NN' ] );
  } );

  it( 'tag a hashtag', function () {
    expect( tag( { value: '#fun', tag: 'hashtag', normal: '#fun' }, lexicon ) ).to.deep.equal( [ 'HT' ] );
  } );

  it( 'tag an eos punctuation', function () {
    expect( tag( { value: '!', tag: 'punctuation', normal: '!' }, lexicon ) ).to.deep.equal( [ '.' ] );
  } );

  it( 'tag an unknown un-adjective', function () {
    expect( tag( { value: 'uneasy', tag: 'word', normal: 'uneasy' }, lexicon ) ).to.deep.equal( [ 'JJ' ] );
  } );

  it( 'tag an unknown plural noun', function () {
    expect( tag( { value: 'chairpersons', tag: 'word', normal: 'chairpersons' }, lexicon ) ).to.deep.equal( [ 'NNS', 'VBZ' ] );
  } );

  it( 'tag an unknown adjective', function () {
    expect( tag( { value: 'ludicrous', tag: 'word', normal: 'ludicrous' }, lexicon ) ).to.deep.equal( [ 'JJ' ] );
  } );

  it( 'tag an unknown JJR', function () {
    expect( tag( { value: 'angrier', tag: 'word', normal: 'angrier' }, lexicon ) ).to.deep.equal( [ 'JJR' ] );
  } );

  it( 'tag an unknown JJS', function () {
    expect( tag( { value: 'angriest', tag: 'word', normal: 'angriest' }, lexicon ) ).to.deep.equal( [ 'JJS' ] );
  } );

  it( 'tag an unknown JJ ending with -ful', function () {
    expect( tag( { value: 'sorrowful', tag: 'word', normal: 'sorrowful' }, lexicon ) ).to.deep.equal( [ 'JJ' ] );
  } );

  it( 'tag an unknown JJ ending with -less', function () {
    expect( tag( { value: 'clueless', tag: 'word', normal: 'clueless' }, lexicon ) ).to.deep.equal( [ 'JJ' ] );
  } );

  it( 'tag an unknown JJ ending with -ory', function () {
    expect( tag( { value: 'compulsory', tag: 'word', normal: 'compulsory' }, lexicon ) ).to.deep.equal( [ 'JJ' ] );
  } );

  it( 'tag an potential proper noun', function () {
    expect( tag( { value: 'Aleksandrs', tag: 'word', normal: 'aleksandrs' }, lexicon ) ).to.deep.equal( [ 'NNP' ] );
  } );

  it( 'tag an potential unknown past tense verb', function () {
    expect( tag( { value: 'abbreviated', tag: 'word', normal: 'abbreviated' }, lexicon ) ).to.deep.equal( [ 'VBD', 'VBN' ] );
  } );
} );
