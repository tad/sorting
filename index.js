// Most of this code is based on java code listed in Algorithms, 4th Edition
// by Robert Sedgewick and Kevin Wayne (Chapter 2).
'use strict';
const sorter = require('./sorter');
const SortCompare = require('./sort-compare');
const support = require('./support');

// console.log(support.shuffleArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')).join(''));



sorter.quickSort('tiny.txt');
// SortCompare.compareSorts('mergeSort', 'mergeBottomUpSort', 100, 100);
