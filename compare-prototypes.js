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

module.exports = String;
module.exports = Number;
