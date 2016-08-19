// Most of this code is based on java code listed in Algorithms, 4th Edition
// by Robert Sedgewick and Kevin Wayne (Chapter 2).
'use strict';
const fs = require('fs');

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

const sorts = function theSorts() {
  return {
    noSort : noSort,
    selectSort : selectSort,
    insertionSort : insertionSort
  }

  function noSort(originalArray) {
    let a = getSimpleShallowClone(originalArray);
    return a;
  }

  function selectSort(originalArray) {
    // Won't work for objects that contain functions!!
    let a = getSimpleShallowClone(originalArray);

    let t = process.hrtime();
    // First, find the smallest item in the array and exchange it with the first
    // entry (itself if it's the smallest). Then, find the next smallest item
    // and exchange it with the second entry. Continue in this way until the
    // entire array is sorted.
    let N = a.length;
    for (let i = 0; i < N; i++) {
      let min = i;
      for (let j = i+1; j < N; j++) {
        if(less(a[j], a[min])) min = j;
      }
      exch(a, i, min);
    }
    return a;
  }

  function insertionSort(originalArray) {

    let a = getSimpleShallowClone(originalArray);

    // For each i from 0 to N-1, exchange a[i] with the entries that are smaller
    // in a[0] through a[i-1]. As the index i travels from left to right, the
    // entries to its left are in sorted order in the array, so the array is
    // fully sorted when i reaches the right end.
    let N = a.length;
    for (let i = 0; i < N; i++) {
      for(let j = i; j > 0 && less(a[j], a[j-1]); j--)
        exch(a, j, j-1);
    }
    return a;
  }

  function less(v, w) {
    return v.compareTo(w) < 0;
  }

  function exch(a, i, j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t;
  }

  function getSimpleShallowClone(originalObject) {
    // Won't work for objects that contain functions!!
    return JSON.parse(JSON.stringify(originalObject));
  }
}();

const sorter = function arraySorter(){
  return {
    noSort: inputFile => doSort(inputFile, sorts.noSort),
    selectSort: inputFile => doSort(inputFile, sorts.selectSort),
    insertionSort: inputFile => doSort(inputFile, sorts.insertionSort)
  }

  function doSort(inputFile, sortFunction) {
    getInputArray(inputFile)
    .then(inputArray => printResults(inputArray, sortFunction(inputArray)),
      err => console.log('Unable to parse input file: ' + inputFile + ': ' + err))
  }

  function getInputArray(fileName){
    return new Promise((resolve, reject) =>
      fs.readFile(fileName, 'utf8', (err, data) => {
        if(!err && data)
          resolve(data.trim().split(''));
        else
          reject(err);
      })
    );
  }

  function printResults(inputArray, sortedArray) {
    console.log(inputArray.join(''));
    console.log(sortedArray.join(''));
  }
}();

const SortCompare = function sortCompare() {
  return {
    compareSorts: compareSorts
  }

  function time(sortAlgorithm, arrayToSort) {
    let t = process.hrtime();
    if(sortAlgorithm === 'noSort') sorts.noSort(arrayToSort);
    if(sortAlgorithm === 'selectSort') sorts.selectSort(arrayToSort);
    if(sortAlgorithm === 'insertionSort') sorts.insertionSort(arrayToSort);
    t = process.hrtime(t);
    let milliseconds = (t[1]/1000000);
    milliseconds += t[0] * 1000;
    return milliseconds;
  }

  function timeRandomInput(sortAlgorithm, N, T) {
    let total = 0.0;
    let a = [];
    for(let t = 0; t < T; t++) {
      // Perform one experiment (generate and sort an array)
      for(let i = 0; i < N; i++) {
        a.push(Math.random());
      }
      total += time(sortAlgorithm, a);
    }
    return total;
  }

  function compareSorts(sortToCompare1, sortToCompare2, sizeOfArrays, numberOfTests) {
    const t1 = timeRandomInput(sortToCompare1, sizeOfArrays, numberOfTests);
    const t2 = timeRandomInput(sortToCompare2, sizeOfArrays, numberOfTests);
    console.log('For %d random Doubles\n %s is', sizeOfArrays, sortToCompare1);
    console.log(' %d times faster than %s\n', t2/t1, sortToCompare2);
  }
}();

sorter.insertionSort('tiny.txt');
// SortCompare.compareSorts('insertionSort', 'selectSort', 250, 100);