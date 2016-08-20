'use strict';
const sorts = require('./sorts');
const SortCompare = function sortCompare() {
  return {
    compareSorts: compareSorts
  }

  function time(sortAlgorithm, arrayToSort) {
    let t = process.hrtime();
    if(sortAlgorithm === 'noSort') sorts.noSort(arrayToSort);
    if(sortAlgorithm === 'selectSort') sorts.selectSort(arrayToSort);
    if(sortAlgorithm === 'insertionSort') sorts.insertionSort(arrayToSort);
    if(sortAlgorithm === 'mergeSort') sorts.mergeSort(arrayToSort);
    if(sortAlgorithm === 'mergeBottomUpSort') sorts.mergeBottomUpSort(arrayToSort);
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
module.exports = SortCompare;
