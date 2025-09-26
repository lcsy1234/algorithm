/**
 * @param {number[]} heights
 * @return {number}
 */
// 思路：要用栈主要来存储索引，然后处理索引以及索引所对应的值，单调栈能快速找到一个区域的左右边界，因为
var largestRectangleArea = function (heights) {
  // 步骤1：初始化变量和数据结构
  let maxArea = 0; // 存储最大矩形面积
  const stack = []; // 单调递增栈，存储柱子索引
  // 首尾添加高度为0的哨兵，避免处理栈空和剩余元素的特殊情况
  const newHeights = [0, ...heights, 0];

  // 步骤2：遍历所有柱子（含哨兵）
  for (let i = 0; i < newHeights.length; i++) {
    // 步骤3：处理栈顶元素（当前柱子高度 < 栈顶柱子高度时）
    // 此时找到了栈顶柱子的右边界（当前i）
    while (
      stack.length > 0 &&
      newHeights[i] < newHeights[stack[stack.length - 1]]
    ) {
      // 弹出栈顶索引（当前要计算的柱子）
      const topIndex = stack.pop(); //4
      // 矩形高度 = 栈顶柱子的高度
      const height = newHeights[topIndex]; //6
      // 矩形宽度 = 右边界（i） - 左边界（新栈顶索引） - 1
      // 新栈顶是左侧第一个比当前柱子矮的柱子索引
      const width = i - stack[stack.length - 1] - 1; //5-3-1=1
      // 计算面积并更新最大值
      maxArea = Math.max(maxArea, height * width); //0
    }
    // 步骤4：当前索引入栈，维持栈的递增特性
    stack.push(i);
  }

  return maxArea;
};

// 测试案例
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 输出 10
// console.log(largestRectangleArea([2,4]));         // 输出 4
// console.log(largestRectangleArea([1]));           // 输出 1
//单调递增序列，找到左右边界索引，然后while来找到最大的maxArea，以及左右哨兵，防止栈顶不存在
var largestRectangleArea = function (heights) {
  const stack = [];
  let maxArea = 0;
  const newHeights = [0, ...heights, 0];
  const len = newHeights.length;
  for (let i = 0; i < len; i++) {
    while (
      stack.length > 0 &&
      newHeights[i] < newHeights[stack[stack.length - 1]]
    ) {
      const topIndex = stack.pop();
      const height = newHeights[topIndex];
      const width = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
};
