/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    // 初始化
    const n = ratings.length
    const candies = new Array(n).fill(1)
    //从左往右
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] += 1
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
          candies[i] = Math.max(candies[i], candies[i+1] + 1);//同时比左边大也比右边大就不用再增加了，而且如果增加就根据右边的值累加
            // candies[i]=candies[i+1]+1 错误案例
             // candies[i]+=1 错误案例


        }
    }
    return candies.reduce((sum, num) => sum + num, 0)
};
// ratings = [3, 2, 1]
//ratings = [1, 2, 2, 1]=>[1,2,1,1]=>
