/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 1. 统计每个元素的频率（哈希表）
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // 2. 定义小顶堆（存储 [元素, 频率]，按频率排序）
  const heap = [];

  // 堆调整函数（按频率维持小顶堆）
  const heapify = (index) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    // 比较频率，找到最小值索引
    if (left < heap.length && heap[left][1] < heap[smallest][1]) {
      smallest = left;
    }
    if (right < heap.length && heap[right][1] < heap[smallest][1]) {
      smallest = right;
    }

    if (smallest !== index) {
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      heapify(smallest);
    }
  };

  // 3. 遍历频率表，维护大小为k的小顶堆
  for (const [num, freq] of freqMap) {
    if (heap.length < k) {
      // 堆未满，直接插入并调整
      heap.push([num, freq]);
      // 上浮调整（从插入位置向上修复堆）
      let i = heap.length - 1;
      //到堆没满的时候保持父节点小，新加入的进行比较之后在heap中交换位置，父元素要小于子元素
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (heap[parent][1] <= heap[i][1]) break;
        [heap[parent], heap[i]] = [heap[i], heap[parent]];
        i = parent;
      }
    } else if (freq > heap[0][1]) {
      //堆已经满了，
      // 堆已满，且当前频率更高，替换堆顶并调整
      heap[0] = [num, freq];
      heapify(0); // 下沉调整堆顶
    }
  }

  // 4. 提取堆中元素（前k个高频元素）
  return heap.map((item) => item[0]);
};

// 测试案例
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]（或[2,1]，顺序不影响）
//freq={1:3,2:2,3:1}
//然后最后的结果是堆heap只保留最大值，所以栈顶是当前的最小值，只要有比堆顶的值更大的就更新堆，当前堆中的顶值是最大值中的最小值
//所以我要得到的是当前的值的数量
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const heap = [];
  for (let i = 0; i < nums.length; i++) {
    freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
  }
  const heapify = function (index) {
    let smallest = index;
    let left = Math.floor(index * 2) + 1;
    let right = Math.floor(index * 2) + 2;
    if (left < heap.length && heap[smallest][1] > heap[left][1]) {
      smallest = left;
    }
    if (right < heap.length && heap[smallest][1] > heap[right][1]) {
      smallest = right;
    }
    if (index !== smallest) {
      [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
      heapify(smallest);
    }
  };
  for (const [num, freq] of freqMap) {
    //当前的堆还没满，i<k
    if (heap.length < k) {
      heap.push([num, freq]);
      let i = heap.length - 1;
      while (i > 0) {
        const parent = Math.floor((i-1) / 2);
        if (heap[parent][1] <=heap[i][1]) break;
        [heap[parent], heap[i]] = [heap[i], heap[parent]];
        i = parent;
      }
    } else if (heap[0][1] < freq) {
      heap[0] = [num, freq];
      heapify(0);
    }
  }
  return heap.map(item=>item[0])
};
