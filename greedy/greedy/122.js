
var maxProfit = function(prices) {
    // silu:如果今天比昨天高，我就卖出
    let profit=0
    for(let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            profit+=prices[i]-prices[i-1]
        }
    }
    return profit
}
