/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 初始化大小为k的小顶堆
  const heap = [];
  // 堆调整函数（维持小顶堆特性）//怎么维持的
  const heapify = (index) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;
    //子节点要大于父节点，如果子节点小于栈顶就进入，调换小节点的位置，left < heap.length是什么用
    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      heapify(smallest); // 递归调整子树
    }
  };

  // 构建初始堆
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  }
  // 从最后一个非叶子节点向上调整 非叶子节点是什么？
  for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
    heapify(i);
  }

  // 处理剩余元素
  for (let i = k; i < nums.length; i++) {
    // 若当前元素大于堆顶，替换并调整
    if (nums[i] > heap[0]) {
      heap[0] = nums[i];
      heapify(0);
    }
  }

  // 堆顶即为第k大元素
  return heap[0];
};

// 测试案例
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
// 思路：利用小顶堆的思想，当前的堆的大小是k，然后最小值是第k个最大值
//
//如果是剩余节点就与当前的最小节点进行对比
var findKthLargest = function (nums, k) {
  const heap = [];
  const heapify = function (index) {
    let smallest = index;
    let left = 2 * index + 1; //左节点的索引存在
    let right = 2 * index + 2;
    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      heapify(smallest); // 递归调整子树
    }
  };
  //找到堆的size
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  }
  //非叶子节点因为有子节点，
  for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
    heapify(i);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap[0]) {
      heap[0] = nums[i];
      heapify(0);
    }
  }
  return heap[0];
};
