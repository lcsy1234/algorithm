class MinStack {
  constructor() {
    this.stack = [];       // 主栈：存储所有元素
    this.minStack = [];    // 辅助栈：存储对应位置的最小值
  }

  // 入栈
  push(val) {
    this.stack.push(val);
    // 辅助栈压入当前最小值（若栈空则为当前值，否则取较小者）
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
    }
  }

  // 出栈
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  // 获取栈顶元素
  top() {
    return this.stack[this.stack.length - 1];
  }

  // 获取当前最小值
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// // 测试案例
// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // 返回 -3
// minStack.pop();
// console.log(minStack.top());    // 返回 0
// console.log(minStack.getMin()); // 返回 -2

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    this.minStack[this.minStack.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var MinStack = function () {
  this.stack = []; // 存储元素的主栈
  this.minStack = []; // 存储对应位置最小值的辅助栈
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  // 辅助栈压入当前最小值（栈空则直接压入当前值，否则取较小值）
  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var MinStack = function() {
    this.stack=[]
    this.minStack=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(this.minStack.length===0){
        this.minStack.push(val)
    }else{
        this.minStack.push(Math.min(val,this.minStack[this.minStack.length-1]))
    }
    
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
