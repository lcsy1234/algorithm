/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0); // 结果数组，初始化为0
    const stack = []; // 单调栈，存储温度的索引

    for (let i = 0; i < n; i++) {
        // 当前温度高于栈顶索引对应的温度时，计算天数差
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop(); // 弹出栈顶索引
            answer[prevIndex] = i - prevIndex; // 记录天数差
        }
        // 当前索引入栈
        stack.push(i);
    }

    return answer;
};

// 测试案例
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); 

// 输出: [1, 1, 4, 2, 1, 1, 0, 0]
var dailyTemperatures = function(temperatures) {
    const result=new Array(temperatures.length).fill(0)
    const stack=[]
    for(let i=0;i<temperatures.length;i++){
        while(stack.length > 0&&temperatures[i]>temperatures[stack[stack.length-1]]){
          const prevIndex=stack.pop()//获取到上一个满足条件的索引的值
            // const prevInde
            result[prevIndex]=i-prevIndex
        }
        stack.push(i)
    }
    return result
}