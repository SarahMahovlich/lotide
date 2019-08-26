const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🙂 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `☹️ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const quote = "The greatest glory in living lies not in never falling but in rising every time we fall";

const countLetters = function(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.split("");
  const numOfLetters = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (numOfLetters[letter]) {
        numOfLetters[letter] += 1;
      } else {
        numOfLetters[letter] = 1;
      }
    }
  }
  return numOfLetters;
};

const result1 = countLetters(quote);

console.log(assertEqual(result1["t"], 6));
console.log(assertEqual(result1["y"], 2));
console.log(assertEqual(result1["s"], 3));

module.exports = countLetters;