const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key of array1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
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

//take in two objects and log an appropriate message

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🙂🙂🙂 Assertion Passed: ${inspect(actual)} === ${inspect(actual)}`);
  } else {
    console.log(`☹️☹️☹️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let ab = { a: "1", b: "2" };
let ba = { b: "9", a: "1" };
let ba2 = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, ba2);

module.exports = assertObjectsEqual;