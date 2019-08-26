// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));

  }
  return results;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🙂 Assertion Passed: ${arr1} === ${arr2}`);
  } else console.log(`☹️ Assertion Failed: ${arr1} !== ${arr2}`);
};

// Test Cases

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[0]), ['g', 'p', 't', 'm', 't']);

assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => word.length), ['6', '7', '2', '5', '3']);

assertArraysEqual(map(words, word => word + "s"), ['grounds', 'controls', 'tos', 'majors', 'toms']);
assertArraysEqual(map(words, word => word + "s"), ['g', 'p', 't', 'm', 't']);

module.exports = map;