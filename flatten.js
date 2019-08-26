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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(arrArr) {
  let arrFlt = [];
  for (let i = 0; i < arrArr.length; i++) {
    if (Array.isArray(arrArr[i])) {
      for (const element of arrArr[i]) {
        arrFlt.push(element);
      }
    } else {
      arrFlt.push(arrArr[i]);
    }
  }
  return arrFlt;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);

module.exports = flatten;