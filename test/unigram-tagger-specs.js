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
    expect( tag( { value: 'chairpersons', tag: 'word', normal: 'chairpersons' }, lexicon ) ).to.deep.equal( [ 'NNS' ] );
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
} );
