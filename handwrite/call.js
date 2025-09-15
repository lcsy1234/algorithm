// 1. 手写 call 方法
Function.prototype.myCall = function(context) {
  // 处理 context 为 null 或 undefined 的情况，指向全局对象
  context = context || window;
  
  // 创建唯一的临时属性，避免覆盖原有属性
  const fnKey = Symbol('tempFn');
  
  // 将当前函数（this）挂载到 context 上
  context[fnKey] = this;
  
  // 提取参数（从第二个参数开始）
  const args = Array.from(arguments).slice(1);
  
  // 调用函数，此时 this 指向 context
  const result = context[fnKey](...args);
  
  // 删除临时属性，避免污染
  delete context[fnKey];
  
  // 返回函数执行结果
  return result;
};

// 2. 手写 apply 方法
Function.prototype.myApply = function(context) {
  // 处理 context 为 null 或 undefined 的情况
  context = context || window;
  
  // 创建唯一临时属性
  const fnKey = Symbol('tempFn');
  
  // 挂载当前函数
  context[fnKey] = this;
  
  // 处理参数（第二个参数应为数组或类数组）
  let result;
  if (arguments[1]) {
    // 检查是否为数组或类数组
    if (!Array.isArray(arguments[1]) && 
        !(arguments[1] instanceof Array) &&
        !(typeof arguments[1] === 'object' && typeof arguments[1].length === 'number')) {
      throw new TypeError('CreateListFromArrayLike called on non-object');
    }
    result = context[fnKey](...arguments[1]);
  } else {
    // 没有参数时直接调用
    result = context[fnKey]();
  }
  
  // 清理临时属性
  delete context[fnKey];
  
  // 返回结果
  return result;
};

// 3. 手写 bind 方法
Function.prototype.myBind = function(context) {
  const self = this; // 保存原函数
  
  // 提取绑定参数（从第二个参数开始）
  const bindArgs = Array.from(arguments).slice(1);
  
  // 创建一个空函数作为中介，用于维护原型链
  const Fn = function() {};
  
  // 定义返回的绑定函数
  const boundFn = function() {
    // 提取调用时的参数
    const callArgs = Array.from(arguments);
    
    // 合并绑定参数和调用参数
    const args = bindArgs.concat(callArgs);
    
    // 如果是通过 new 调用的，this 应该指向实例对象
    // 否则指向绑定的 context
    return self.apply(this instanceof Fn ? this : context, args);
  };
  
  // 维护原型链
  Fn.prototype = self.prototype;
  boundFn.prototype = new Fn();
  
  return boundFn;
};

// 测试示例
function test(a, b) {
  console.log(`this:`, this);
  console.log(`参数:`, a, b);
  return a + b;
}

const obj = { name: '测试对象' };

// 测试 call
console.log('===== 测试 call =====');
test.myCall(obj, 1, 2);

// 测试 apply
console.log('===== 测试 apply =====');
test.myApply(obj, [3, 4]);

// 测试 bind
console.log('===== 测试 bind =====');
const boundTest = test.myBind(obj, 5);
boundTest(6);

// 测试 bind 与 new 结合使用
console.log('===== 测试 bind 与 new =====');
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const BoundPerson = Person.myBind(obj);
const p = new BoundPerson('张三', 20);
console.log(p); // 应该是 Person 实例，而不是 obj
