// Test sorts:
'use strict';
const assert = require('assert');
const sorts = require('../sorts');
const support = require('../support');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Sorts', () => {
  describe('noSort', () => {
    it('should return whatever you pass it', () => {
      assert.deepEqual([2,6,4,1], sorts.noSort([2,6,4,1]));
    });
  });
  describe('selectSort', () => {
    it('should properly sort the array', () => {
      assert.deepEqual([1,2,3,4,5,6,7], sorts.selectSort([6,5,4,3,2,7,1]));
      assert.deepEqual(['A','B','C','D','E','F','G'], sorts.selectSort(['A','F','G','B','D','C','E']));
    });
  });
  describe('insertionSort', () => {
    it('should properly sort the array', () => {
      assert.deepEqual([1,2,3,4,5,6,7], sorts.insertionSort([6,5,4,3,2,7,1]));
      assert.deepEqual(['A','B','C','D','E','F','G'], sorts.insertionSort(['A','F','G','B','D','C','E']));
    });
  });
  describe('shellSort', () => {
    it('should properly sort the array', () => {
      assert.deepEqual([1,2,3,4,5,6,7], sorts.shellSort([6,5,4,3,2,7,1]));
      assert.deepEqual(['A','B','C','D','E','F','G'], sorts.shellSort(['A','F','G','B','D','C','E']));
    });
  });
  describe('mergeSort', () => {
    it('should properly sort the array', () => {
      assert.deepEqual([1,2,3,4,5,6,7], sorts.mergeSort([6,5,4,3,2,7,1]));
      assert.deepEqual(['A','B','C','D','E','F','G'], sorts.mergeSort(['A','F','G','B','D','C','E']));
    });
  });
  describe('mergeBottomUpSort', () => {
    it('should properly sort the array', () => {
      assert.deepEqual([1,2,3,4,5,6,7], sorts.mergeBottomUpSort([6,5,4,3,2,7,1]));
      assert.deepEqual(['A','B','C','D','E','F','G'], sorts.mergeBottomUpSort(['A','F','G','B','D','C','E']));
    });
  });
  describe('quickSort', () => {
    it('should properly sort the array', () => {
      assert.deepEqual([1,2,3,4,5,6,7], sorts.quickSort([6,5,4,3,2,7,1]));
      assert.deepEqual(['A','B','C','D','E','F','G'], sorts.quickSort(['A','F','G','B','D','C','E']));
    });
  });

});
