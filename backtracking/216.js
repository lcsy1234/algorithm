/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 思路：如果有i+
var combinationSum3 = function(k, n) {
    const path=[]
    const result=[]
    const backTracking=function(_k,_n,sum,startIndex){
        if(path.length===_k) {
            if(sum===_n){
                result.push(path.slice())
            }
            return 
        }
        for(let i=startIndex;i<=9;i++){
            path.push(i)
            sum+=i
            backTracking(_k,_n,sum,i+1)
            sum-=i
            path.pop()
        }
    }
    backTracking(k,n,0,1)
    return result
};
combinationSum3(3,7)