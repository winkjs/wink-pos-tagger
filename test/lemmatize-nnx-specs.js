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

describe( 'lemmatizeNNX test cycle', function () {
  plurals.forEach( function ( pn ) {
    it( 'lemmatize ' + pn[ 0 ] + ' must give ' + pn[ 1 ], function () {
        expect( lemmatize( pn[ 0 ] ) ).to.deep.equal( pn[ 1 ] );
    } );
  } );
} );
