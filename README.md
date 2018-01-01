# wink-pos-tagger

English Part-of-speech (POS) tagger

### [![Build Status](https://api.travis-ci.org/winkjs/wink-pos-tagger.svg?branch=master)](https://travis-ci.org/winkjs/wink-pos-tagger) [![Coverage Status](https://coveralls.io/repos/github/winkjs/wink-pos-tagger/badge.svg?branch=master)](https://coveralls.io/github/winkjs/wink-pos-tagger?branch=master) [![Inline docs](http://inch-ci.org/github/winkjs/wink-pos-tagger.svg?branch=master)](http://inch-ci.org/github/winkjs/wink-pos-tagger) [![dependencies Status](https://david-dm.org/winkjs/wink-pos-tagger/status.svg)](https://david-dm.org/winkjs/wink-pos-tagger) [![devDependencies Status](https://david-dm.org/winkjs/wink-pos-tagger/dev-status.svg)](https://david-dm.org/winkjs/wink-pos-tagger?type=dev)

[<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >](http://winkjs.org/)

Perform part-of-speech tagging of english sentences using **`wink-pos-tagger`**. It is a part of [wink](http://winkjs.org/) — a growing family of high quality packages for Statistical Analysis, Natural Language Processing and Machine Learning in NodeJS.

### Installation

Use [npm](https://www.npmjs.com/package/wink-pos-tagger) to install:

    npm install wink-pos-tagger --save

### Getting Started
The code below illustrates the steps required to pos tag a sentence:
```javascript
// Load wink-pos-tagger.
var posTagger = require( 'wink-pos-tagger' );

// Create an instance of the pos tagger.
var tagger = posTagger();

// Tag a sentence using the tag sentence api.
tagger.tagSentence( 'The pencil has a sharp point.' );
// -> [ { value: 'The', tag: 'word', pos: 'DT' },
//      { value: 'pencil', tag: 'word', pos: 'NN' },
//      { value: 'has', tag: 'word', pos: 'VBZ' },
//      { value: 'a', tag: 'word', pos: 'DT' },
//      { value: 'sharp', tag: 'word', pos: 'JJ' },
//      { value: 'point', tag: 'word', pos: 'NN' },
//      { value: '.', tag: 'punctuation', pos: '.' } ]

// Tag another one.
tagger.tagSentence( 'It is not polite to point at people.' );
// -> [ { value: 'It', tag: 'word', pos: 'PRP' },
//      { value: 'is', tag: 'word', pos: 'VBZ' },
//      { value: 'not', tag: 'word', pos: 'RB' },
//      { value: 'polite', tag: 'word', pos: 'JJ' },
//      { value: 'to', tag: 'word', pos: 'TO' },
//      { value: 'point', tag: 'word', pos: 'VB' },
//      { value: 'at', tag: 'word', pos: 'IN' },
//      { value: 'people', tag: 'word', pos: 'NNS' },
//      { value: '.', tag: 'punctuation', pos: '.' } ]
```

Notice the use of word 'point' in the two sentences above. Here 'point' is homonym. It is used as a **noun**  in the first sentence and as a **verb** in the second.

### Documentation
Check out the [pos tagger API documentation](http://winkjs.org/wink-pos-tagger/) to learn more.

### Need Help?

If you spot a bug and the same has not yet been reported, raise a new [issue](https://github.com/winkjs/wink-pos-tagger/issues) or consider fixing it and sending a pull request.

### Copyright & License

**wink-pos-tagger** is copyright 2017 [GRAYPE Systems Private Limited](http://graype.in/).

It is licensed under the under the terms of the GNU Affero General Public License as published by the Free
Software Foundation, version 3 of the License.
