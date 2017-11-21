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
/* eslint-disable no-console */
//
const K = require( './rules/consts.js' );

var posCRsGE0 = require( './rules/pos-rules-ge0.js' );
var valueCRsGE0 = require( './rules/value-rules-ge0.js' );
var posCRsLE0 = require( './rules/pos-rules-le0.js' );
var valueCRsLE0 = require( './rules/value-rules-le0.js' );

var testValueAtDelta = function ( tokens, cti, rule ) {
  var tAti = tokens[ rule.operand.delta + cti ];
  if ( tAti && rule.matches.test( tAti[ rule.operand.property ] ) ) return true;
  return false;
}; // testValueAtDelta();

var testValueInRange = function ( tokens, cti, rule ) {
  var tAti;
  for ( var i = rule.operand.range[ 0 ]; i <= rule.operand.range[ 1 ]; i += 1 ) {
    tAti = tokens[ i + cti ];
    if ( tAti && rule.matches.test( tAti[ rule.operand.property ] ) ) return true;
  }
  return false;
}; // testValueInRange()

var operation = Object.create( null );
operation[ K.TEST_VALUE_AT_DELTA ] = testValueAtDelta;
operation[ K.TEST_VALUE_IN_RANGE ] = testValueInRange;

var applyPosRules = function ( tokens, cti, posRule ) {
  var rules = posRule.rules;
  var change = true;
  for ( var i = 0, imax = rules.length; ( i < imax && change ); i += 1 ) {
    change = operation[ rules[ i ].op ]( tokens, cti, rules[ i ] );
  }
  if ( change ) {
    tokens[ posRule.thenPosAt + cti ].pos = posRule.willBe;
    return true;
  }
  return false;
}; // executePosRules()

var applyContextRule = function ( tokens, contextRules ) {
  var posRules;
  var i, imax, j, jmax;
  for ( i = 0, imax = tokens.length; i < imax; i += 1 ) {
    posRules = contextRules[ tokens[ i ].pos ];
    if ( posRules ) {
      for ( j = 0, jmax = posRules.length; j < jmax && !applyPosRules( tokens, i, posRules[ j ] ); j += 1);
    }
  }
}; // executeContextRule()

var applyContextRules = function ( tokens ) {
  applyContextRule( tokens, valueCRsLE0 );
  applyContextRule( tokens, posCRsLE0 );
  applyContextRule( tokens, valueCRsGE0 );
  applyContextRule( tokens, posCRsGE0 );
};

module.exports = applyContextRules;
