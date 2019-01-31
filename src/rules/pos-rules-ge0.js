//     wink-pos-tagger
//     English Part-of-speech (POS) tagger
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-pos-tagger”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

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
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^PRP$$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^PRP$$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
  ], // NN
  POS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
  ], // POS
  IN: [
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ 1, 2 ] }, matches: /^VB$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^VBZ$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        }
  ], // IN
  JJR: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBR'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBR'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBN$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBR'
         }
  ], // JJR
  RP: [
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ 1, 3 ] }, matches: /^CD$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^CC$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        }
  ], // RP
  NNS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^PRP$$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         }
  ], // NNS
  RB: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        }
  ], // RB
  JJ: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBD$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJR$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBG$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^MD$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^VB$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
  ], // JJ
  EX: [
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'pos', range: [ 1, 2 ] }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        }
  ], // EX
  PRP$: [
          {
            rules: [
                      { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
            ],
            thenPosAt: 0,
            willBe: 'PRP'
          }
  ], // PRP$
  RBR: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJR'
         }
  ], // RBR
  JJS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBN$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBS'
         }
  ], // JJS
  WP: [
    {
      rules: [
                { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$|^NNS$/ }
      ],
      thenPosAt: 0,
      willBe: 'WDT'
    }
  ] // WP
};
