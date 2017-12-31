/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var lemmatize = require( '../src/lemmatize-vbx.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

var verbs = [
              [ 'winning', 'win' ],
              [ 'dying', 'die' ],
              [ 'agreed', 'agree' ],
              [ 'died', 'die' ],
              [ 'eaten', 'eat' ],
              [ 'wins', 'win' ],
              [ 'manages', 'manage' ],
              [ 'pushes', 'push' ],
              [ 'tries', 'try' ],
              [ 'had', 'has' ],
              [ 'are', 'be' ],
              [ 'suggesting', 'suggest' ],
              [ 'juxtaposes', 'juxtapos' ],
              [ 'foresaw', 'foresaw' ]
            ];

describe( 'lemmatizeVBX test cycle', function () {
  verbs.forEach( function ( verb ) {
    it( 'lemmatize ' + verb[ 0 ] + ' must give ' + verb[ 1 ], function () {
        expect( lemmatize( verb[ 0 ] ) ).to.deep.equal( verb[ 1 ] );
    } );
  } );
} );
