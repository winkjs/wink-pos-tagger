// Defines the morphological rules for guessing the POS for unknown words.
/** @private */
var unknownWordsPOS = Object.create( null );
unknownWordsPOS.s = 'NNS';
unknownWordsPOS.ss = 'NN';
unknownWordsPOS.ing = 'VBG';
unknownWordsPOS.ed = 'VBN';
unknownWordsPOS.ly = 'RB';
unknownWordsPOS.ble = 'JJ';
unknownWordsPOS.al = 'JJ';
unknownWordsPOS.ous = 'JJ';
unknownWordsPOS.ic = 'JJ';

module.exports = unknownWordsPOS;
