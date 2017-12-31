// Irregular verbs.
var iVerbs = require( 'wink-lexicon/src/irregular-verbs.js' );
var stem = require( 'wink-porter2-stemmer' );
var lexicon = require( 'wink-lexicon/src/lexicon.js' );

// Rules: the trick is to look for `ing`, followed by `ed` and finally by
// `s`. If a match fails you jump by `delta` steps.
var regexes = [
  { rgx: /(.+)ing$/i, by: '', delta: 4 },
  { rgx: /(.+)ing$/i, by: 'e', delta: 1 },
  { rgx: /(.+).ing$/i, by: '', delta: 1 },
  { rgx: /(.+)ying$/i, by: 'ie', delta: 99 },
  { rgx: /(.+)ed$/i, by: '', delta: 6 },
  { rgx: /(.+)d$/i, by: '', delta: 1 },
  { rgx: /(.+)ied$/i, by: 'y', delta: 1 },
  { rgx: /(.+)ed$/i, by: 'y', delta: 1 },
  { rgx: /(.+)ed$/i, by: 'e', delta: 1 },
  { rgx: /(.+).ed$/i, by: '', delta: 99 },
  { rgx: /(.+)s$/i, by: '', delta: 1 },
  { rgx: /(.+)es$/i, by: '', delta: 1 },
  { rgx: /(.+)ies$/i, by: 'y', delta: 1 }
];

// ### lemmatizeVBX
/**
 *
 * Conjugates a `verb` to it's base form (VB).
 *
 * @param {string} verb — that needs to be conjugated to base form.
 * @return {string} the base form of `verb`.
 * @example
 * lemmatizeVBX( 'winning' );
 * // -> win
 * @private
*/
var lemmatizeVBX = function ( verb ) {
  // Look up for irregular verb.
  var base = iVerbs[ verb ];

  if ( base ) return base;
  // Contains match against the rules otherwise `null`
  var match;
  // The 1st element of the `match` + `by`.
  var m1by;
  // Apply rules.
  for ( var i = 0, imax = regexes.length; i < imax; ) {
    match = verb.match( regexes[ i ].rgx );
    if ( match === null ) {
      i += regexes[ i ].delta;
    } else {
      m1by = match[ 1 ] + regexes[ i ].by;
      base = iVerbs[ m1by ];
      // NOTE: uncomment to avoid eatening being converted to eat!
      if ( base /* && base === match[ 1 ] */ ) return base;
      // Lexicon check before attempting stemming.
      if ( lexicon[ m1by ] ) return m1by;
      i += 1;
    }
  }
  // Return the result
  return (
    // If a base is found return that;
    ( base ) ? base :
    // If verb is found in lexicon, return as is otherwise fall back to stemming.
    ( lexicon[ verb ] ) ? verb : stem( verb )
  );
}; // lemmatizeVBX()

module.exports = lemmatizeVBX;
