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
// Nouns that end with `s` but are singular; for example **gas**.
var singularNouns = require( 'wink-lexicon/src/singular-nouns.js' );
// Nouns that unmutable.
var uninflectedNouns = require( 'wink-lexicon/src/uninflected-nouns.js' );
// Nouns who dont follow the rules!!
var irregularNouns = require( 'wink-lexicon/src/irregular-nouns.js' ).singular;
// Mass nouns like water.
var uncountableNouns = require( 'wink-lexicon/src/uncountable-nouns.js' );

// Rules sequence is critical.
var rules = [
  { rgx: /([^aeiouy]|qu)ies$/i, by: '$1y' },
  { rgx: /(x|ch|ss|sh)es$/i, by: '$1' },
  { rgx: /(tive)s$/i, by: '$1' },
  { rgx: /([lroea])ves$/i, by: '$1f' },
  { rgx: /(i)ves$/i, by: '$1fe' },
  { rgx: /(hive)s$/i, by: '$1' },
  { rgx: /(cris|test)(is|es)$/i, by: '$1is' },
  { rgx: /(vert|ind)ices$/i, by: '$1ex' },
  { rgx: /(quiz)zes$/i, by: '$1' },
  { rgx: /(m)ovies$/i, by: '$1ovie' },
  { rgx: /([ti])a$/i, by: '$1um' },
  { rgx: /^(a)x[ie]s$/i, by: '$1xis' },
  { rgx: /(alias|status|virus)(es)?$/i, by: '$1' },
  { rgx: /(octop|fung|vir)(us|i)$/i, by: '$1us' },
  { rgx: /(bus)(es)?$/i, by: '$1' },
  { rgx: /(shoe|canoe|^toe)s$/i, by: '$1' },
  { rgx: /(o)es$/i, by: '$1' },
  { rgx: /(matr)ices$/i, by: '$1ix' },
  { rgx: /(database)s$/i, by: '$1' },
  { rgx: /(s)eries$/i, by: '$1eries' },
  { rgx: /((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, by: '$1sis' },
  { rgx: /(ss)$/i, by: '$1' },
  { rgx: /s$/i, by: '' }
];

// ### lemmatizeNNX
/**
 *
 * Converts the input `noun` to it's singular form.
 *
 * @param {string} noun — that needs to be lemmatizeNNXd.
 * @return {string} the singular of `noun`.
 * @example
 * lemmatizeNNX( 'handkerchieves' );
 * // -> handkerchief
 * @private
*/
var lemmatizeNNX = function ( noun ) {
  // Start with lookup.
  if ( singularNouns[ noun ] || uninflectedNouns[ noun ] || uncountableNouns[ noun ] ) return noun;
  var singular = irregularNouns[ noun ];
  if ( singular ) return singular;
  // Try rules!
  singular = noun;
  for ( var i = 0, imax = rules.length; i < imax && singular === noun; i += 1 ) {
    singular = noun.replace( rules[ i ].rgx, rules[ i ].by );
  }
  // Return the result!
  return singular;
}; // lemmatizeNNX()

module.exports = lemmatizeNNX;
