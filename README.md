# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sarah_mahovlich/lotide`

**Require it:**

`const _ = require('@sarah_mahovlich/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element in an array
* `tail`: returns everything except the first element in an array
* `middle`: returns the middle two elements for an even length array and the middle element for an odd length array
* `eqArrays`: returns true for two equal arrays or false if they are not equal
* `assertEqual`: an assertion function for actual and expected parameters
* `assertArraysEqual`: an assertion function for eqArrays
* `eqObjects`: returns true for two equal object or false if they are not equal
* `assertObjectsEqual`: an assertion function for eqObjects
* `countLetters`: returns object that counts the number of each letter in a given string
* `countOnly`: specifically counts items from an array
* `findKey`: finds the key for a given value in an object, utilizing a callback function to specify what value to find
* `findKeyByValue`: finds the key for a given value in an object
* `flatten`: given a nested array it will return an array with all the elements without nesting
* `letterPositions`: returns an object of all the indices in a string where each character is found
* `map`: returns array based on callback function applied to a given array
* `takeUntil`: function will keep collecting items from an array until the callback function provided returns a truthy value
* `without`: returns a subset of an array by removing unwanted elements
