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

// ### testValueAtDelta
/**
 *
 * Tests the **value** of token's property defined by `rule.operand.property`
 * using regex `rule.matches` at `rule.operand.delta` away from `cti`.
 *
 * @param {object[]} tokens in wink-tokenizer standards.
 * @param {number} cti current token's index.
 * @param {object} rule containing keys `op`, `operand` and `matches` and their
 * corresponding values.
 * @return {boolean} `true` if match occurs otherwise `false`.
 * @private
*/
var testValueAtDelta = function ( tokens, cti, rule ) {
  var tAti = tokens[ rule.operand.delta + cti ];
  if ( tAti && rule.matches.test( tAti[ rule.operand.property ] ) ) return true;
  return false;
}; // testValueAtDelta();

// ### testValueInRange
/**
 *
 * Tests the **value** of token's property defined by `rule.operand.property`
 * using regex `rule.matches` anywhere within the range specified by array
 * `rule.operand.range`. The array is a 2-element array specifying the range,
 * which is added to `cti` to compute the actual range.
 *
 * @param {object[]} tokens in wink-tokenizer standards.
 * @param {number} cti current token's index.
 * @param {object} rule containing keys `op`, `operand` and `matches` and their
 * corresponding values.
 * @return {boolean} `true` if match occurs otherwise `false`.
 * @private
*/
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

// ### applyContextRule
/**
 *
 * Applies the given `contextRule` on the current token. A rule applicatin may
 * trigger change in the POS at token specified by `thenPosAt` relative distance.
 * The change is applied only if the new POS is amongst one of the valid POSes.
 *
 * @param {object[]} tokens in wink-tokenizer standards.
 * @param {number} cti current token's index.
 * @param {object} contextRule contains the specific rule.
 * @param {array[]} poses each element is an array & contains valid POSes for
 * the token at that index in `tokens`.
 * @return {boolean} `true` if pos change occurs otherwise `false`.
 * @private
*/
var applyContextRule = function ( tokens, cti, contextRule, poses ) {
  var rules = contextRule.rules;
  var change = true;
  for ( var i = 0, imax = rules.length; ( i < imax && change ); i += 1 ) {
    change = operation[ rules[ i ].op ]( tokens, cti, rules[ i ] );
  }
  // Trigger change only if the new `pos` is a valid one — present in `poses`.
  if ( change && poses[ cti ].indexOf( contextRule.willBe ) !== -1 ) {
    tokens[ contextRule.thenPosAt + cti ].pos = contextRule.willBe;
    return true;
  }
  return false;
}; // applyContextRule()

// ### applyContextRules
/**
 *
 * Applies given `contextRules` on each token one-by-one. For each token, rules
 * are tried until either a POS change has occurred or all rules have been exhausted
 * without any change.
 *
 * @param {object[]} tokens in wink-tokenizer standards.
 * @param {object} contextRules contains rules for different POSes. The rules to
 * be applied is selected on the basis of POS of the current token.
 * @param {array[]} poses each element is an array & contains valid POSes for
 * the token at that index in `tokens`.
 * @return {void} Nothing!
 * @private
*/
var applyContextRules = function ( tokens, contextRules, poses ) {
  var rules;
  var i, imax, j, jmax;
  for ( i = 0, imax = tokens.length; i < imax; i += 1 ) {
    rules = contextRules[ tokens[ i ].pos ];
    if ( rules ) {
      for ( j = 0, jmax = rules.length; j < jmax && !applyContextRule( tokens, i, rules[ j ], poses ); j += 1);
    }
  }
}; // applyContextRules()

// ### applyAllContextRules
/**
 *
 * There are currently 4 sets of context rules. They are first categorized
 * on the basis of `property` of token they use i.e. **value** or **pos**. Each
 * one of them is further categorized on the basis of if the **delta/range** values
 * are **positive** or **negative**. It applies these rules in the required sequence.
 *
 * @param {object[]} tokens in wink-tokenizer standards.
 * @param {array[]} poses each element is an array & contains valid POSes for
 * the token at that index in `tokens`.
 * @return {void} Nothing!
 * @private
*/
var applyAllContextRules = function ( tokens, poses ) {
  // First apply <0 rules to update POS before looking ahead.
  // Try `value` specific rules first followed by `pos` specific. In other words
  // specific rules followed by generic rules.
  applyContextRules( tokens, valueCRsLE0, poses );
  applyContextRules( tokens, posCRsLE0, poses );
  // Already applied <0 rules, time to look ahead.
  applyContextRules( tokens, valueCRsGE0, poses );
  applyContextRules( tokens, posCRsGE0, poses );
}; // applyAllContextRules()

module.exports = applyAllContextRules;
