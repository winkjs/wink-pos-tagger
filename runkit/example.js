/* eslint-disable no-console */

// Load wink-pos-tagger.
var posTagger = require( 'wink-pos-tagger' );

// Create an instance of the pos tagger.
var tagger = posTagger();

// Tag the sentence using the tag sentence api.
var tokens = tagger.tagSentence( 'A bear just crossed the road.' );

console.log( tokens );
