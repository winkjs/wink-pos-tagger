/* eslint-disable no-console */

var chai = require( 'chai' );
var mocha = require( 'mocha' );
var lemmatize = require( '../src/lemmatize-nnx.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

var plurals = [
                [ 'wives', 'wife' ],
                [ 'knives', 'knife' ],
                [ 'shelves', 'shelf' ],
                [ 'hooves', 'hoof' ],
                [ 'loaves', 'loaf' ],
                [ 'affirmatives', 'affirmative' ],
                [ 'relatives', 'relative' ],
                [ 'thieves', 'thief' ],
                [ 'beliefs', 'belief' ],
                [ 'handkerchieves', 'handkerchief' ],
                [ 'handkerchiefs', 'handkerchief' ],
                [ 'selves', 'self' ],
                [ 'calves', 'calf' ],
                [ 'leaves', 'leaf' ],
                [ 'scarves', 'scarf' ],
                [ 'briefs', 'brief' ],
                [ 'toes', 'toe' ],
                [ 'shoes', 'shoe' ],
                [ 'potatoes', 'potato' ],
                [ 'canoes', 'canoe' ],
                [ 'viruses', 'virus' ],
                [ 'gas', 'gas' ],
                [ 'men', 'man' ],
                [ 'blood', 'blood' ],
                [ 'scissors', 'scissors' ],
                [ 'chaos', 'chaos' ]
              ];

describe( 'unigramPOSTagger() test cycle', function () {
  plurals.forEach( function ( pn ) {
    it( 'lemmatize ' + pn[ 0 ] + ' must give ' + pn[ 1 ], function () {
        expect( lemmatize( pn[ 0 ] ) ).to.deep.equal( pn[ 1 ] );
    } );
  } );
} );
