class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.status = MyPromise.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallBacks = [];
    //管理状态，value是要return出去的吧
    const resolve = (value) => {
      if (this.status !== MyPromise.PENDING) return;
      this.status = MyPromise.FULFILLED;
      this.value = value;
      //继续执行pending状态的内容
      this.onFulfilledCallbacks.forEach((cb) => cb());
    };
    //reason
    const reject = (reason) => {
      if (this.status !== MyPromise.PENDING) return;
      this.status = MyPromise.REJECTED;
      this.reason = reason;
      this.onRejectedCallBacks.forEach((ab) => cb());
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      // 执行器中抛出错误，直接 reject
      reject(err);
    }
  }
  //then的作用调用一个new promise,传入的是函数
  //开始调用

  then(onFulfilled, onRejected) {
    // 类里面的的报错怎么写
    // if(typeof onFulfilled!=='function') { this.reject}
    // 处理 onFulfilled/onRejected 不是函数的情况（透传值）
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    //要返回一个newPromise ，如果 onFulfilled中的值已经是new promise的话，那就调用函数的then的状态
    // result.then(resolve, reject);
    const newPromise = new MyPromise((resolve, reject) => {
      if (this.status === MyPromise.FULFILLED) {
        // const result=
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(this.value);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      }
      if (this.status === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(
          setTimeout(() => {
            try {
              const result = onFulfilled(this.value);
              resolvePromise(newPromise, result, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0)
        );
        this.onRejectedCallBacks.push(
          setTimeout(() => {
            try {
              const result = onRejected(this.value);
              resolvePromise(newPromise, result, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0)
        );
      }
    });
  }
}
function resolvePromise(promise, result, resolve, reject) {
  //如果
  // 避免循环引用（如果返回值是新 Promise 本身）
  if (promise === result) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  if (result instanceof MyPromise) {
    result.then(resolve, reject);
  } else {
    resolve(result);
  }
}
