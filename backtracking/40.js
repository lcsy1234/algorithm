/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const path = []
    const res = []
    const n = candidates.length
    candidates.sort()
    const backtrack = function (step, sum) {
        if (sum === target) {
            res.push(Array.from(path))
            return
        }
        if (sum > target) {
            return
        } 
        for (let i = step; i < n; i++) {
            if(i>step&&candidates[i]===candidates[i-1]) continue
            path.push(candidates[i])
            sum += candidates[i]
            backtrack(i + 1, sum)
            sum -= candidates[i]
            path.pop()
        }
    }
    backtrack(0,0)
    return res
};
//解法二 哈希表 如果没有值就true，有值就false，
var combinationSum2=function(candidates,target){
    const path=[]
    const res=[]
    const len=candidates.length
    const used=new Map()
    const backtrack=function(step,sum){
        if(sum===target){
            res.push(Array.from(path))
            return
        }
        if(sum>target) return 
        for(let i=step;i<len;i++){
            path.push(candidates[i])
            sum+=candidates[i]
            if( i>step && used.get(candidates[i])) continue
            used.set(candidates[i],used.get(candidates[i])?false:true)
            backtrack(i+1,sum)
            sum-=candidates[i]
            path.pop()
            // used.set(candidates[i],false)
        }
    }
    backtrack(0,0)
    return res

}