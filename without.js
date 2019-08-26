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

const without = function(arrSrc, arrRem) {
  let array = [];
  for (let i = 0; i < arrSrc.length; i++) {
    let found = false;
    for (let j = 0; j < arrRem.length; j++) {
      if (arrSrc[i] === arrRem[j]) {
        found = true;
        break;
      } else {
        found = false;
      }
    }
    if (found === false) {
      array.push(arrSrc[i]);
    }
  }
  return array;
};

assertArraysEqual(without([2], [2]), []);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 2, 3, 4], [2, 3]), [1, 4]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);