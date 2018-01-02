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
var normalize = require( '../src/normalize-token-value.js' );

var expect = chai.expect;
var describe = mocha.describe;
var it = mocha.it;

var words = [
              [ 'Renée', 'renee' ],
              [ 'Zoë', 'zoe' ],
              [ 'exposé', 'expose' ],
              [ 'résumé', 'resume' ],
              [ 'Nestlé', 'nestle' ],
              [ 'Citroën', 'citroen' ],
              [ 'ACME', 'acme' ],
              [ 'AbCdEf', 'abcdef' ],
              [ 'daïs', 'dais' ]
            ];

describe( 'normalizeTV test cycle', function () {
  words.forEach( function ( word ) {
    it( 'normalize ' + word[ 0 ] + ' must give ' + word[ 1 ], function () {
        expect( normalize( word[ 0 ] ) ).to.deep.equal( word[ 1 ] );
    } );
  } );
} );
