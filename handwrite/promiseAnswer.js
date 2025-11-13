class MyPromise {
  // 定义三种状态（常量避免魔法字符串）
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    // 初始化状态（默认 pending）
    this.status = MyPromise.PENDING;
    // 存储成功结果
    this.value = undefined;
    // 存储失败原因
    this.reason = undefined;
    // 存储 pending 状态时注册的成功回调（处理异步 resolve）
    this.onFulfilledCallbacks = [];
    // 存储 pending 状态时注册的失败回调（处理异步 reject）
    this.onRejectedCallbacks = [];

    // 成功回调：只能从 pending → fulfilled
    const resolve = (value) => {
      // 状态已变更则不执行（保证状态不可逆）
      if (this.status !== MyPromise.PENDING) return;
      this.status = MyPromise.FULFILLED;
      this.value = value;
      // 执行所有缓存的成功回调（异步场景下，回调在 resolve 前已注册）
      this.onFulfilledCallbacks.forEach(cb => cb());
    };

    // 失败回调：只能从 pending → rejected
    const reject = (reason) => {
      if (this.status !== MyPromise.PENDING) return;
      this.status = MyPromise.REJECTED;
      this.reason = reason;
      // 执行所有缓存的失败回调
      this.onRejectedCallbacks.forEach(cb => cb());
    };

    // 立即执行 executor，捕获执行器中的同步错误
    try {
      executor(resolve, reject);
    } catch (error) {
      // 执行器报错直接触发 reject
      reject(error);
    }
  }

  // then 方法：实现链式调用
  then(onFulfilled, onRejected) {
    // 处理非函数参数（透传值：如果 onFulfilled 不是函数，默认返回 value；onRejected 不是函数，默认抛出 reason）
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };

    // then 必须返回新 Promise，实现链式调用，因为要实现链式调用，就比如在参数中，有一个函数，函数中return了一个newpromise
    const newPromise = new MyPromise((resolve, reject) => {
      // 1. 当前 Promise 已处于 fulfilled 状态（同步 resolve 场景）
      if (this.status === MyPromise.FULFILLED) {
        // 用 setTimeout 模拟微任务（原生 Promise 是微任务，这里简化为宏任务）
        setTimeout(() => {
          try {
            // 执行上一个 then 的成功回调，获取返回值
            const result = onFulfilled(this.value);
            // 解析返回值，决定新 Promise 的状态
            resolvePromise(newPromise, result, resolve, reject);
          } catch (error) {
            // 回调执行出错，新 Promise 直接 reject
            reject(error);
          }
        }, 0);
      }

      // 2. 当前 Promise 已处于 rejected 状态（同步 reject 场景）
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      // 3. 当前 Promise 仍处于 pending 状态（异步 resolve/reject 场景）
      if (this.status === MyPromise.PENDING) {
        // 缓存成功回调，等 resolve 时执行
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onFulfilled(this.value);
              resolvePromise(newPromise, result, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        // 缓存失败回调，等 reject 时执行
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onRejected(this.reason);
              resolvePromise(newPromise, result, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return newPromise;
  }
}

// 辅助函数：解析 then 回调的返回值，决定新 Promise 的状态
function resolvePromise(newPromise, result, resolve, reject) {
  // 避免循环引用（如果返回值是新 Promise 本身）
  if (newPromise === result) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  // 如果返回值是 Promise 实例
  if (result instanceof MyPromise) {
    // 沿用其状态（result 成功则新 Promise 成功，反之亦然）
    result.then(resolve, reject);
  } else {
    // 普通值直接 resolve 新 Promise
    resolve(result);
  }
}
// 测试 1：同步成功 + 链式调用
const p1 = new MyPromise((resolve) => {
  resolve('同步成功');
});
p1.then(value => {
  console.log('p1 第一次 then：', value); // 同步成功
  return '第一个 then 的返回值';
}).then(value => {
  console.log('p1 第二次 then：', value); // 第一个 then 的返回值
});

// 测试 2：异步 resolve + 错误处理
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve('异步成功');
    reject(new Error('异步失败'));
  }, 1000);
});
p2.then(
  value => console.log('p2 成功：', value),
  err => {
    console.log('p2 错误回调：', err.message); // 异步失败
    throw new Error('处理错误时新增错误');
  }
).catch(err => {
  console.log('p2 catch：', err.message); // 处理错误时新增错误
});

// 测试 3：then 返回 Promise
const p3 = new MyPromise(resolve => resolve(10));
p3.then(value => {
  return new MyPromise(resolve => {
    setTimeout(() => resolve(value * 2), 500);
  });
}).then(value => {
  console.log('p3 链式结果：', value); // 20（500ms 后）
});