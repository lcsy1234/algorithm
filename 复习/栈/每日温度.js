//问题：存储节点大的一点
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const res = new Array(n).fill(0);
  const stack = [];
  //栈用来pop出来小的值
  for (let i = 0; i < n; i++) {
    //当签的值如果》前一个值的话
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIdx = stack.pop();
      res[prevIdx] = i - prevIdx;
    }
    stack.push(i);
  }
  return res;
};
