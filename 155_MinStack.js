/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  let minTop = this.minStack[this.minStack.length - 1]
  if (this.minStack.length === 0 || x < minTop) {
    this.minStack.push(x)
  } else {
    this.minStack.push(minTop)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const ret = this.stack.pop()
  this.minStack.pop()
  return ret
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};