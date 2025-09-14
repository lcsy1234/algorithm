
//手写promise
class MyPromise {
  constructor(executor) {
    this.status = "pending"; //pending, fulfilled, rejected
    this.value = undefined; //成功的值
    this.reason = undefined; //失败的原因

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.status === "rejected") {
      onRejected(this.reason);
    }
  }
}

//测试
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
    // reject("失败");
  }, 1000);
});

promise.then(
  (value) => {
    console.log("成功的值:", value);
  },
  (reason) => {
    console.log("失败的原因:", reason);
  }
);      