'use strict';
const fs = require('fs');
const sorts = require('./sorts');

const sorter = function arraySorter(){
  return {
    noSort: inputFile => doSort(inputFile, sorts.noSort),
    selectSort: inputFile => doSort(inputFile, sorts.selectSort),
    insertionSort: inputFile => doSort(inputFile, sorts.insertionSort),
    shellSort: inputFile => doSort(inputFile, sorts.shellSort),
    mergeSort: inputFile => doSort(inputFile, sorts.mergeSort),
    mergeBottomUpSort: inputFile => doSort(inputFile, sorts.mergeBottomUpSort)
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

module.exports = sorter;
