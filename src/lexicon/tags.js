// POS for `tag`!
/** @private */
var tagPOS = Object.create( null );
tagPOS.number = 'CD';
tagPOS.email = 'NNP';
tagPOS.mention = 'NNP';
tagPOS.hashtag = 'HT';
tagPOS.url = 'NN';
tagPOS.emoticon = 'M';
tagPOS.emoji = 'M';
tagPOS.time = 'JJ';

module.exports = tagPOS;
