# wink-pos-tagger

English Part-of-speech (POS) tagger

### [![Build Status](https://api.travis-ci.org/winkjs/wink-pos-tagger.svg?branch=master)](https://travis-ci.org/winkjs/wink-pos-tagger) [![Coverage Status](https://coveralls.io/repos/github/winkjs/wink-pos-tagger/badge.svg?branch=master)](https://coveralls.io/github/winkjs/wink-pos-tagger?branch=master) [![Inline docs](http://inch-ci.org/github/winkjs/wink-pos-tagger.svg?branch=master)](http://inch-ci.org/github/winkjs/wink-pos-tagger) [![dependencies Status](https://david-dm.org/winkjs/wink-pos-tagger/status.svg)](https://david-dm.org/winkjs/wink-pos-tagger) [![devDependencies Status](https://david-dm.org/winkjs/wink-pos-tagger/dev-status.svg)](https://david-dm.org/winkjs/wink-pos-tagger?type=dev) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/winkjs/Lobby)

[<img align="right" src="https://decisively.github.io/wink-logos/logo-title.png" width="100px" >](http://winkjs.org/)

Perform part-of-speech tagging of english sentences using **`wink-pos-tagger`**. It is based on transformation based learning (TBL) approach pioneered by Eric Brill.

Optimized for performance, it _pos-tags_ and _lemmatizes_ over **525,000 tokens per second** with an accuracy of **93.2%** on the standard WSJ22-24 test set. This was [benchmarked](https://github.com/bestiejs/benchmark.js) on 2.2 GHz Intel Core i7 machine with 16GB RAM using its `tagRawTokens()` API.

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

// Tag the sentence using the tag sentence api.
tagger.tagSentence( 'He is trying to fish for fish in the lake.' );
// -> [ { value: 'He', tag: 'word', normal: 'he', pos: 'PRP' },
//      { value: 'is', tag: 'word', normal: 'is', pos: 'VBZ', lemma: 'be' },
//      { value: 'trying', tag: 'word', normal: 'trying', pos: 'VBG', lemma: 'try' },
//      { value: 'to', tag: 'word', normal: 'to', pos: 'TO' },
//      { value: 'fish', tag: 'word', normal: 'fish', pos: 'VB', lemma: 'fish' },
//      { value: 'for', tag: 'word', normal: 'for', pos: 'IN' },
//      { value: 'fish', tag: 'word', normal: 'fish', pos: 'NN', lemma: 'fish' },
//      { value: 'in', tag: 'word', normal: 'in', pos: 'IN' },
//      { value: 'the', tag: 'word', normal: 'the', pos: 'DT' },
//      { value: 'lake', tag: 'word', normal: 'lake', pos: 'NN', lemma: 'lake' },
//      { value: '.', tag: 'punctuation', normal: '.', pos: '.' } ]
```

Notice the way instances of the word "fish" have been tagged as **verb** and **noun**.

### Documentation
Check out the [pos tagger API documentation](http://winkjs.org/wink-pos-tagger/) to learn more.

### Need Help?

If you spot a bug and the same has not yet been reported, raise a new [issue](https://github.com/winkjs/wink-pos-tagger/issues) or consider fixing it and sending a pull request.

### About wink
[Wink](http://winkjs.org/) is a family of open source packages for **Statistical Analysis**, **Natural Language Processing** and **Machine Learning** in NodeJS. The code is **thoroughly documented** for easy human comprehension and has a **test coverage of ~100%** for reliability to build production grade solutions.

### Copyright & License

**wink-pos-tagger** is copyright 2017-19 [GRAYPE Systems Private Limited](http://graype.in/).

It is licensed under the terms of the MIT License.
