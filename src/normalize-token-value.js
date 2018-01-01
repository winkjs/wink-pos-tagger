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
// Regex for [diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) removal.
var rgxDiacritical = /[\u0300-\u036f]/g;

// ### normalizeTV
/**
 *
 * Normalizes the token's value by converting it to lower case and stripping
 * the diacritical marks (if any).
 *
 * @param {string} value — that needs to be normalized.
 * @return {string} the normalized value.
 * @example
 * normalizeTV( 'Nestlé' );
 * // -> nestle
 * @private
*/
var normalizeTV = function ( value ) {
  return (
    value.toLowerCase().normalize( 'NFD' ).replace( rgxDiacritical, '' )
  );
}; // normalizeTV()

module.exports = normalizeTV;
