'use strict';
const sorts = function theSorts() {
  return {
    noSort : noSort,
    selectSort : selectSort,
    insertionSort : insertionSort,
    shellSort : shellSort,
    mergeSort : mergeSort
  }

  function noSort(originalArray) {
    let a = getSimpleShallowClone(originalArray);
    return a;
  }

  function selectSort(originalArray) {
    // Won't work for objects that contain functions!!
    let a = getSimpleShallowClone(originalArray);

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

  function shellSort(originalArray) {

    let a = getSimpleShallowClone(originalArray);

    let N = a.length;
    let h = 1;
    while (h < Math.trunc(N/3)) {
      h = 3*h + 1;
    }
    h = Math.trunc(h);
    while (h >= 1) {
      for (let i = h; i < N; i++) {
        for (let j = i; j >= h && less(a[j], a[j-h]); j -= h) {
          exch(a, j, j-h);
        }
      }
      h = Math.trunc(h/3);
      console.log(h);
    }
    return a;
  }

  function mergeSort(originalArray) {
    let a = getSimpleShallowClone(originalArray);

    let aux = [];
    sort(a, 0, a.length - 1);
    return a;

    function sort(a, lo, hi) {
      if (hi <= lo) return;
      let mid = lo + Math.trunc((hi - lo)/2);
      sort(a, lo, mid);
      sort(a, mid+1, hi);
      merge(a, lo, mid, hi);
    }

    function merge(a, lo, mid, hi) {
      let i = lo, j = mid+1;

      for(let k = lo; k <= hi; k++) {
        aux[k] = a[k];
      }

      for(let k = lo; k <= hi; k++) {
        if(i > mid)                     a[k] = aux[j++];
        else if (j > hi)                a[k] = aux[i++];
        else if (less(aux[j], aux[i]))  a[k] = aux[j++];
        else                            a[k] = aux[i++];
      }
    }
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

module.exports = sorts;
