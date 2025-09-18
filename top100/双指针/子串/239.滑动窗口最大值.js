/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//思路：滑动窗口，单调队列
//单调队列：保持队列中的元素按某种顺序排列（递增或递减）
//维护一个队列，queue，里面是元素的索引
//队列的头部如果超出滑动窗口范围，就把它移除
//队列中的元素是单调递减的，如果有队列中已经有了比当前元素小的，就把它们移除
//每次+1所以得判断i>=k-1向result里面添加元素

//时间复杂度：O(n)  空间复杂度：O(k)

var maxSlidingWindow = function (nums, k) {
  const result = []; // 存储每个窗口的最大值
  const deque = []; // 单调队列：存储元素索引，维护元素值单调递减
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // 1. 移除队列中超出当前窗口范围的索引（窗口左边界为 i - k + 1）
    // 若队首索引 <= i - k，说明已不在窗口内，移除
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift(); // 队首出队
    }
    // 2. 移除队列中所有值小于当前元素的索引
    // 这些元素不可能成为后续窗口的最大值（当前元素更大且位置更靠后）
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop(); // 队尾出队（从后往前移除）
    }
    // 3. 将当前元素的索引加入队列
    deque.push(i); //入队
    console.log("%c Line:29 🍒 deque", "color:#42b983", deque);
    // 4. 当窗口完全形成（i >= k - 1），队首即为当前窗口的最大值
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
      console.log("%c Line:32 🍻 result", "color:#33a5ff", result);
    }
  }

  return result;
};

// 测试用例
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
var maxSlidingWindow = function (nums, k) {
  let queue = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    //队列的首位元素k移除
    while (queue.length > 0 && queue[0] <= i - k) {
      queue.shift();
    }
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    queue.push(i);
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  return result;
};
