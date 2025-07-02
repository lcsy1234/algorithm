// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */

const { arrayBuffer } = require("stream/consumers")

// const { start } = require("repl");

// //思路：每个节点遍历，都是从0开始，结束条件是满足
// var combinationSum = function(candidates, target) {
//     const path=[]
//     const res=[]
//     const n=candidates.length
//     const backtrack=function(index,sum){
//         if(sum===target){
//             res.push[Array.from(path)]
//             return 
//         }
//         for(let i=0;i<n;i++){
//             path.push(candiArr[i])
//             sum+=candiArr[i]
//             backtrack(index+1,sum)
//             sum-=candiArr[i]
//             path.pop()
//         }

//     }
//     backtrack(0,0)
//     return res
// };
// //【2,3,4,5]->[2,3,4,5] 2->2,3,4,5 , i
var combinationSum=function(candidates,target){
    const path=[]
    const res=[]
    const n=candidates.length
    const backtrack=function(step,sum){
        if(sum===target){
            res.push(Array.from(path))
            return 
        }
        if(sum>target){
            return
        }
        for(let i=step;i<n;i++){
            path.push(candidates[i])
            sum+=candidates[i]
            backtrack(i,sum)
            sum-=candidates[i]
            path.pop()
        }
    }
    backtrack(0,0)
    return res
}