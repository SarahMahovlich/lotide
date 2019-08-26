const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let midArray = [];
  let middle = "";
  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 === 0) { //should return two elements in the array
    middle = (array.length / 2);
    midArray.push(array[middle - 1]);
    midArray.push(array[middle]);
  } else if (array.length % 2 !== 0) { // should return one element in the array
    middle = Math.floor(array.length / 2);
    midArray.push(array[middle]);
  }
  return midArray;
};

module.exports = middle;


//EVEN
// if the array is even should return two elements in the array
// need to determine what index are middle two
// then return an array with the elements at those two indices

//ODD
// if the array is odd should return one element in the array
// need to determine what index is the middle one
// then return an array with the elements at the index
