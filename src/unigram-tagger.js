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
// Defines the morphological rules for guessing the POS for unknown words.
var unknownWordsPOS = {
  s: 'NNS',
  ss: 'NN',
  ing: 'VBG',
  ed: 'VBN',
  ly: 'RB',
  ble: 'JJ',
  al: 'JJ',
  ous: 'JJ',
  ic: 'JJ'
};

// POS for `tag`!
var tagPOS = {
  number: 'CD',
  email: 'NNP',
  mention: 'NNP',
  hashtag: 'HT',
  url: 'NN',
  emoticon: 'M',
  emoji: 'M',
  time: 'JJ'
};

// POS for punctuations.
var punctuationPOS = {
  '.': '.',
  '!': '.',
  '?': '.',
  '[': '(',
  '{': '(',
  '(': '(',
  ']': ')',
  '}': ')',
  ')': ')',
  ',': ',',
  ':': ':',
  ';': ':',
  '-': ':',
  '…': ':',
  '"': '"',
  '\'': '"'
};

var unigramPOSTagger = function ( token, lexicon ) {
  var word = token.token.toLowerCase();
  // Finish off with punctuations first.
  if ( token.tag === 'punctuation' ) {
    token.pos = punctuationPOS[ token.token ];
    return token;
  }
  // Start with tag lookup!
  token.pos = tagPOS[ token.tag ] ||
              // Didn't work, try dictionary lookup.
              ( lexicon[ word ] ||
                // Still struggling, time to apply morphological rules.
                // Their sequence of application is important: match the longest
                // one first!
                ( unknownWordsPOS[ word.slice( -3 ) ] ||
                  ( unknownWordsPOS[ word.slice( -2 ) ] ||
                      unknownWordsPOS[ word.slice( -1 ) ] ) ) );
  if ( word.slice( 0, 2 ) === 'un' && lexicon[ word.slice( 2 ) ] ) token.pos = 'JJ';
  // Nothing worked, fall back to noun!
  token.pos = token.pos || 'NN';
  return token;
}; // unigramPOSTagger();

module.exports = unigramPOSTagger;
