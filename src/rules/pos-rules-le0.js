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
/* eslint max-lines: [ 'error', 2100 ] */
// A portion of this data is derived from the fnTBL project. The fnTBL is
// copyright by Johns Hopkins University and Radu Florian and Grace Ngai.
// It is sourced from www.cs.jhu.edu/~rflorian/fntbl/index.html;
// licensed under the MIT "like" License. You may obtain a copy of the License
// at www.cs.jhu.edu/~rflorian/fntbl/license.html.
/** @ignore */
const K = require( './consts.js' );
module.exports = {
  NN: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^TO$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ -2, -1 ] }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^PRP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^MD$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^WDT$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^TO$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^PRP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^is$|^are$|^was$|^am$|^were$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /..ing$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        }
  ], // NN
  VBP: [
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ -3, -1 ] }, matches: /^MD$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^TO$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ -2, -1 ] }, matches: /^VB$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ -3, -1 ] }, matches: /^MD$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
  ], // VBP
  VB: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ -2, -1 ] }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^PRP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^WDT$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^WP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VBZ$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^JJ$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VBP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^PRP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^PRP$$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VBD$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNPS$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^CC$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^VBP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^WDT$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^WP$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        }
  ], // VB
  VBD: [
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ -2, -1 ] }, matches: /^VBZ$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VBD$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ -3, -1 ] }, matches: /^VBP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ -2, -1 ] }, matches: /^VB$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^VBD$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^DT$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^IN$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         }
  ], // VBD
  VBN: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^PRP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^WP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^PRP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^TO$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^NN$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^MD$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNPS$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^PRP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^WP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^CC$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^,$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RBR$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         }
  ], // VBN
  POS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^PRP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^WP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         }
  ], // POS
  NNS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^PRP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^WDT$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^,$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^PRP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^NN$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
  ], // NNS
  VBG: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
  ], // VBG
  JJ: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
  ], // JJ
  VBZ: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^PRP$$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VB$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         }
  ], // VBZ
  NNPS: [
          {
            rules: [
                      { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^ZZZ$/ },
                      { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^ZZZ$/ }
            ],
            thenPosAt: 0,
            willBe: 'NNS'
          }
  ], // NNPS
  RBS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJS'
         }
  ] // RBS
};
