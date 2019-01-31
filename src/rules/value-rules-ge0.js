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
  IN: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^as$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 2 }, matches: /^as$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBZ$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBD$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'DT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBP$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBD$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBZ$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^'s$/ }
          ],
          thenPosAt: 0,
          willBe: 'DT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^.$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^well$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^.$/ }
          ],
          thenPosAt: 0,
          willBe: 'DT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^As$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 2 }, matches: /^as$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^outside$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^before$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^like$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^TO$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
  ], // IN
  VBP: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^market$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^be$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^cut$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^put$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
  ], // VBP
  JJ: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^of$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^British$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Soviet$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Western$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^early$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^European$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^'s$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^past$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^long$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'value', range: [ 1, 2 ] }, matches: /^Airways$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Canadian$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^much$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^JJ$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^early$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^this$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^late$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^such$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^a$/ }
          ],
          thenPosAt: 0,
          willBe: 'PDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^now$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^first$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBD$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^executive$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^officer$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 2 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^average$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Japanese$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^VBP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNPS'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Commercial$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^organized$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^further$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'RBR'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^further$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^.$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 2 }, matches: /^ZZZ$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        }
  ], // JJ
  JJS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^most$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBS'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^most$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBS'
         }
  ], // JJS
  NN: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^executive$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^right$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^half$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'PDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^official$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^right$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^giant$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^principal$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^close$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^half$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^official$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^firm$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^are$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^VBD$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^shares$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^holding$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
  ], // NN
  VBD: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^by$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^ended$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
  ], // VBD
  VBN: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^set$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^of$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
  ], // VBN
  NNP: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^American$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^American$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^German$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^South$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^American$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^JJ$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^North$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 1 }, matches: /^American$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         }
  ], // NNP
  DT: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^all$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'PDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^no$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^RB$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^'s$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^either$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'CC'
        },
  ], // DT
  NNS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^the$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Investors$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNP'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^plans$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^to$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^a$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         }
  ], // NNS
  RB: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^TO$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^up$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^to$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^so$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^PRP$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^enough$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^out$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^down$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^so$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^overseas$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
  ], // RB
  WDT: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ }
           ],
           thenPosAt: 0,
           willBe: 'IN'
         }
  ], // WDT
  VBZ: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^of$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         }
  ], // VBZ
  RBR: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^higher$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJR'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^lower$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJR'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^less$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^full$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 2 }, matches: /^fees$/ }
           ],
           thenPosAt: 0,
           willBe: 'CC'
         }
  ], // RBR
  EX: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^.$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^there$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^.$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        }
  ], // EX
  VBG: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NN$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^operating$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 1 }, matches: /^profit$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^operating$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNS$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         }
  ], // VBG
  FW: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^de$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 1 }, matches: /^NNP$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        }
  ], // FW
  JJR: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^more$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: 2 }, matches: /^VBN$/ }
           ],
           thenPosAt: 0,
           willBe: 'RBR'
         }
  ] // JJR
};
