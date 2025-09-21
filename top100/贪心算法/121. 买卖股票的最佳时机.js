/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0; // 不足两天，无法交易
    let minPrice = prices[0]; // 记录历史最低价格（买入点）
    let maxProfit = 0; // 记录最大利润
    for (let i = 1; i < prices.length; i++) {
        // 更新历史最低价格（如果当前价格更低）
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        // 计算当前利润（当前价格 - 最低价格），更新最大利润
        else {
            const currentProfit = prices[i] - minPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }
    return maxProfit;
};

// 测试用例
console.log(maxProfit([7,1,5,3,6,4])); // 输出5（1买入，6卖出）

