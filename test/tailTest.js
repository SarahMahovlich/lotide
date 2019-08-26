const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");