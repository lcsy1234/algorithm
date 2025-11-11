class myPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  //resolve接收状态，并且改变状态，
  constructor(executor) {
    this.value = undefined;
    this.status = myPromise.PENDING;
    this.reason = undefined;
    this.onFulfilledCallBacks = [];
    this.onRejectedCallBacks = [];
    const resolve=(value)=> {
      if (this.status !== myPromise.PENDING) return;
      this.status = myPromise.FULFILLED;
      this.value = value;
      this.onFulfilledCallBacks.forEach((cb) => cb());
    }
    const reject=(reason)=> {
      if (this.status !== myPromise.PENDING) return;
      this.status = myPromise.REJECTED;
      this.reason = reason;
      this.onRejectedCallBacks.forEach((cb) => cb());
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  //思路是要判断传回来的数是一个函数，然后需要再返回一个
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    const newPromise = new myPromise((resolve, reject) => {
      //有三个状态
      if (this.status === myPromise.FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === myPromise.REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === myPromise.PENDING) {
        this.onFulfilledCallBacks.push(
          ()=>{
            setTimeout(() => {
            try {
              const result = onFulfilled(this.value);
              resolvePromise(newPromise, result, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0)
          }
        );
        this.onRejectedCallBacks.push(
          ()=>{
            setTimeout(() => {
            try {
              const result = onRejected(this.reason);
              resolvePromise(newPromise, result, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0)
          }
        );
      }
    });
    return newPromise
  }
 
}
function resolvePromise(newPromise, result, resolve, reject) {
    if (newPromise === result) {
      return reject(new TypeError("Chaining cycle detected for promise"));
    }
    if (result instanceof myPromise) {
      // 沿用其状态（result 成功则新 Promise 成功，反之亦然）
      result.then(resolve, reject);
    } else {
      // 普通值直接 resolve 新 Promise
      resolve(result);
    }
  }
const p1=new myPromise((resolve)=>{
    resolve('成功')
})
p1.then(value => {
  console.log('p1 第一次 then', value); // 同步成功
  return '第一个 then 的返回值';
}).then(value => {
  console.log('p1 第二次 then', value); // 第一个 then 的返回值
});
const p2 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve('异步成功');
    reject(new Error('异步失败'));
  }, 1000);
})
p2.then(
  value => console.log('p2 成功：', value),
  err => {
    console.log('p2 错误回调：', err.message); // 异步失败
    throw new Error('处理错误时新增错误');
  }
).catch(err => {
  console.log('p2 catch：', err.message); // 处理错误时新增错误
});
