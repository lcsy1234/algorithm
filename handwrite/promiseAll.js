// promiseHooks.all([p1,p1])
//一次性返回所有promise的结果，结果是resolve获得的值还是什么，然后如果有一个错误直接返回报错
class MyPromise {}
//可迭代对象
function myAll(promises) {
  if (!Array.isArray(promises)) {
    return MyPromise.reject(new TypeError("The input must be an array"));
  }
  //  Array.isArray(promises)
  //因为需要将完成后的结果一整个resolve出去，所以需要一个myPromise
  return new MyPromise((resolve, reject) => {
    let count = 0;
    const total = promises.length;
    const res = [];
    if (total === 0) {
      resolve(res);
    }
    for (let i = 0; i < total; i++) {
      //resolve 会将非promise的内容包裹起来
      MyPromise.resolve(promises[i]).then(
        (value) => {
          count++;
          res.push(value);
          if (count === total) {
            resolve(res);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    }
  });
}
function resolve(promise) {
  if (promise instanceof MyPromise) {
    return value;
  }
 if (typeof value === 'object' && value !== null && typeof value.then === 'function') {
    return new MyPromise((resolve, reject) => {
      // 调用 thenable 的 then 方法，将 resolve/reject 传入，遵循其状态
      // 注意：then 方法可能抛出错误，需要捕获
      try {
        value.then(resolve, reject);
      } catch (err) {
        // 若 then 方法执行出错，直接 reject
        reject(err);
      }
    });
  }
  return new MyPromise((resolve) => {
    resolve(value);
  });
}
