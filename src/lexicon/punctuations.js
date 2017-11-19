// POS for punctuations.
/** @private */
var punctuationPOS = Object.create( null );
punctuationPOS[ '.' ] = '.';
punctuationPOS[ '!' ] = '.';
punctuationPOS[ '?' ] = '.';
punctuationPOS[ '[' ] = '(';
punctuationPOS[ '{' ] = '(';
punctuationPOS[ '(' ] = '(';
punctuationPOS[ ']' ] = ')';
punctuationPOS[ '}' ] = ')';
punctuationPOS[ ')' ] = ')';
punctuationPOS[ ',' ] = ',';
punctuationPOS[ ':' ] = ':';
punctuationPOS[ ';' ] = ':';
punctuationPOS[ '-' ] = ':';
punctuationPOS[ '…' ] = ':';
punctuationPOS[ '"' ] = '"';
punctuationPOS[ '\'' ] = '"';

module.exports = punctuationPOS;
