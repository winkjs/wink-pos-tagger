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
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'DT'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^like$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^MD$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^while$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^the$/ }
          ],
          thenPosAt: 0,
          willBe: 'JJ'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^take$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^taking$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^took$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^over$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
  ], // IN
  VBP: [
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^n't$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^need$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^earnings$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^not$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^market$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^a$/ }
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
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -3, -1 ] }, matches: /^does$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^did$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^do$/ }
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
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -3, -1 ] }, matches: /^let$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         }
  ], // VBP
  JJ: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^ZZZ$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^U.S.$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^to$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^open$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^next$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'IN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^chief$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NN$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^own$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^RB$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^Western$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNP$/ }
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
  ], // JJ
  NN: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^n't$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^who$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^is$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^SCI$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^TV$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^are$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^began$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^be$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^help$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: 0 }, matches: /^CD$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
          ],
          thenPosAt: 0,
          willBe: 'NNP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^been$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^,$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^closing$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^third$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
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
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^begin$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^not$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^offering$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
          ],
          thenPosAt: 0,
          willBe: 'VBG'
        }
  ], // NN
  VBD: [
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^been$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -3, -1 ] }, matches: /^being$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^the$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBN'
         }
  ], // VBD
  VBN: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^that$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^which$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBD'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^helped$/ }
           ],
           thenPosAt: 0,
           willBe: 'VB'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^an$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^expected$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJ'
         }
  ], // VBN
  DT: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNS$/ }
          ],
          thenPosAt: 0,
          willBe: 'WDT'
        },
  ], // DT
  POS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^'s$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^that$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^That$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^'s$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^'s$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^EX$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         }
  ], // POS
  NNS: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^plans$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^NNP$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^Mr.$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^who$/ }
           ],
           thenPosAt: 0,
           willBe: 'VBZ'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^yen$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -2 }, matches: /^IN$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
  ], // NNS
  RB: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^down$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VB$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
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
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^up$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VBN$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^off$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^VB$/ }
          ],
          thenPosAt: 0,
          willBe: 'RP'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^to$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^back$/ }
          ],
          thenPosAt: 0,
          willBe: 'VB'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^the$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^back$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        }
  ], // RB
  WDT: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^CC$/ }
           ],
           thenPosAt: 0,
           willBe: 'DT'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^that$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^IN$/ }
           ],
           thenPosAt: 0,
           willBe: 'DT'
         },
  ], // WDT
  VB: [
        {
          rules: [
                    { op: K.TEST_VALUE_IN_RANGE, operand: { property: 'normal', range: [ -2, -1 ] }, matches: /^'s$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^date$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^TO$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^declined$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^comment$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        }
  ], // VB
  VBZ: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^the$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         },
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^phone$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^calls$/ }
           ],
           thenPosAt: 0,
           willBe: 'NNS'
         },
  ], // VBZ
  RBR: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^earlier$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
           ],
           thenPosAt: 0,
           willBe: 'JJR'
         },
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
  ], // RBR
  VBG: [
         {
           rules: [
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^selling$/ },
                     { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'pos', delta: -1 }, matches: /^DT$/ }
           ],
           thenPosAt: 0,
           willBe: 'NN'
         },
  ], // VBG
  RP: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^,$/ }
          ],
          thenPosAt: 0,
          willBe: 'RB'
        }
  ], // RP
  CD: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^no$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^one$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        },
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'value', delta: -1 }, matches: /^No$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^one$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        }
  ], // CD
  MD: [
        {
          rules: [
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: 0 }, matches: /^will$/ },
                    { op: K.TEST_VALUE_AT_DELTA, operand: { property: 'normal', delta: -1 }, matches: /^good$/ }
          ],
          thenPosAt: 0,
          willBe: 'NN'
        }
  ], // MD
};
