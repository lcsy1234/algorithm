// const p1=new promise(()=>{
//     console.log()
// })
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟请求成功，返回用户信息（含用户ID）
      resolve({ userId: 101, username: "张三" });
      // 若要测试错误，解开下面注释：
      // reject(new Error("用户信息请求失败"));
    }, 1000);
  });
};

const fetchOrders = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 用用户ID获取订单
      resolve([{ orderId: 1, goods: "手机" }, { orderId: 2, goods: "电脑" }]);
    }, 800);
  });
};

const fetchGoods = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["耳机", "键盘", "鼠标"]); // 模拟商品列表
    }, 1200);
  });
};
// 纯链式调用（串行执行：fetchUser → fetchOrders → fetchGoods）
fetchUser()
  // 第一步：获取用户信息
  .then(user => {
    console.log("第一步：获取到用户信息", user);
    // 返回下一个异步任务（用用户ID获取订单），衔接链式
    return fetchOrders(user.userId);
  })
  // 第二步：获取用户订单（依赖第一步的用户ID）
  .then(orders => {
    console.log("第二步：获取到用户订单", orders);
    // 返回下一个异步任务（获取商品列表，即使不依赖订单，也串行执行）
    return fetchGoods();
  })
  // 第三步：获取商品列表（等第二步订单完成后才执行）
  .then(goodsList => {
    console.log("第三步：获取到商品列表", goodsList);
    // 最终整合所有结果（按需使用）
    console.log("\n最终整合结果：");
    console.log("（用户信息在第一步已获取，订单在第二步，商品列表在第三步）");
  })
  // 统一捕获整个链式中所有可能的错误（任意一步失败都会触发）
  .catch(err => {
    console.error("链式执行失败：", err.message);
  });
//   我的问题是链式调用的resolve他只管理状态和value，然后then里面传入函数，执行这个传入的函数，参数位新的value
//那么让，然后将当前的new Promise与result进行对比，在return 之后返回值的之后 要判断是否是自身调用或者是已经是promise了。如果已经是promise就
// 直接用这个promise.then否则创建一个new promise
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