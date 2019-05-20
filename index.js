function CString(initialValue) {
  this.value = initialValue;
}

CString.prototype.concat = function(other) {
  this.value += other;
  return this;
};

CString.prototype.eval = function() {
  return this.value;
};


module.exports = CString;
