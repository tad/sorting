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

// Fisher–Yates shuffle found here:
// https://bost.ocks.org/mike/shuffle/
const support = function supportFunctions() {
  return {
    shuffleArray: shuffleArray,
  }
  function shuffleArray(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}();

module.exports = support;
