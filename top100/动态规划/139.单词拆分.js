/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 思路：动态规划：dp[i]就是代码的答案，然后遍历每个s的字符串，找到对应长度的字符串，如果可以拼接就拼接
var wordBreak = function(s, wordDict) {
    const n=s.length
    const dp=new Array(n+1).fill(false)
    const wordDictSet=new Set(wordDict)
    dp[0]=true
    for(let i=1;i<=n;i++){
        //这个是
        for(let j=0;j<i;j++){
            if(dp[j]&&wordDictSet.has(s.substring(j,i))){
                dp[i]=true
                break
            }
        }
    }
    return dp[n]
};
// 经验：动态规划都要保证代码的中的数组的完整性所以初始化的时候都要保证多一个for循环的时候《=n