class AsyncQueue {
  /**
   * 初始化异步任务队列
   * @param {number} concurrency 最大并发数，默认1（串行执行）
   */
  constructor(concurrency = 1) {
    this.concurrency = concurrency; // 最大并发数
    this.queue = []; // 待执行任务队列
    this.running = 0; // 当前正在执行的任务数
  }

  /**
   * 添加任务到队列
   * @param {Function} task 异步任务函数（需返回Promise）
   * @returns {Promise} 任务执行结果的Promise
   */
  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.run();
    });
  }

  /**
   * 执行队列中的任务
   */
  run() {
    // 如果当前并发数已达上限，或队列中无任务，直接返回
    if (this.running >= this.concurrency || this.queue.length === 0) {
      return;
    }

    // 从队列头部取出一个任务
    const { task, resolve, reject } = this.queue.shift();
    this.running++; // 增加当前运行任务数

    // 执行任务
    Promise.resolve(task())
      .then((result) => {
        resolve(result); // 将结果传递给add返回的Promise
      })
      .catch((error) => {
        reject(error); // 将错误传递给add返回的Promise
      })
      .finally(() => {
        this.running--; // 任务执行完毕，减少当前运行任务数
        this.run(); // 递归执行下一个任务
      });
  }

  /**
   * 等待所有任务执行完成
   * @returns {Promise} 所有任务完成的Promise
   */
  waitAll() {
    return new Promise((resolve) => {
      // 检查是否所有任务都已完成
      const checkComplete = () => {
        if (this.running === 0 && this.queue.length === 0) {
          resolve();
        } else {
          // 每10ms检查一次
          setTimeout(checkComplete, 10);
        }
      };
      checkComplete();
    });
  }
}

// 使用示例
async function demo() {
  // 创建一个最大并发数为2的队列
  const queue = new AsyncQueue(2);

  // 生成5个异步任务（模拟网络请求等）
  const tasks = Array.from({ length: 5 }, (_, i) => {
    return () =>
      new Promise((resolve) => {
        console.log(`任务${i + 1}开始执行`);
        // 模拟不同的执行时间
        setTimeout(() => {
          console.log(`任务${i + 1}执行完成`);
          resolve(i + 1);
        }, 1000 * ((i % 3) + 1));
      });
  });
  console.log("%c Line:80 🌶 tasks", "color:#7f2b82", tasks);

  // 添加任务到队列
  const results = tasks.map((task) => queue.add(task));

  // 等待所有任务完成
  await queue.waitAll();
  console.log("所有任务执行完成，结果：", await Promise.all(results));
}

demo();
//手写一个异步队列
// 思路：因为要有队列最大值，
class AsyncQueue {
  constructor(queLen) {
    this.queue = [];
    this.running = 0;
    this.queLen = queLen;
  }
  //执行其中的一个task，然后this。running++，在finally的时候--
  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.run();
    });
  }
  run(tasks) {
    if (this.running > this.queLen || this.queue.length === 0) return;
    const { task, resolve, reject } = tasks.shift();
    this.running++;
    Promise.resolve(task)
      .then((result) => resolve(result))
      .catch((error) => {
        reject(error); // 将错误传递给add返回的Promise
      })
      .finally(() => {
        this.running--; // 任务执行完毕，减少当前运行任务数
        this.run(); // 递归执行下一个任务
      });
  }
  waitAll() {
    return new Promise((resolve) => {
      const checkQueue = function () {
        if (this.queue.length === 0 || this.running === 0) {
          resolve();
        } else {
          // 每10ms检查一次
          setTimeout(checkComplete, 10);
        }
      };
      checkQueue();
    });
  }
}
