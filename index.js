// Most of this code is based on java code listed in Algorithms, 4th Edition
// by Robert Sedgewick and Kevin Wayne (Chapter 2).
'use strict';
const sorter = require('./sorter');
const SortCompare = require('./sort-compare');

String.prototype.compareTo = function(that) {
  if (this > that) return 1;
  if (this < that) return -1;
  return 0;
}

Number.prototype.compareTo = function(that) {
  if (this > that) return 1;
  if (this < that) return -1;
  return 0;
}

sorter.mergeBottomUpSort('tiny.txt');
// SortCompare.compareSorts('mergeSort', 'shellSort', 100, 10);
