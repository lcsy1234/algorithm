/**
 * @param {string} s
 * @return {string[][]}
 */
const huiwenStr=function(s,l,r){
    for(let i=l,j=r;i<j;i++,j--){
        if(s[i] !== s[j]) return false;
        return true
    }

}
var partition = function(s) {
    const path=[]
    const res=[]
    const n=s.length
    
    const backtrack=function(step){
        if(path.join('')===n){
            res.push(Array.from())
            return
        }
        for(let i=step;i<n;i++){
            let str=s[0]
            // if(i>step &&s[i]===s[i-1]){
            //    str=s[step]+s[step]


            // }//自己想的思路很像，但是修改了原字符串所以定义一下
            // //其实不用自己去思考如何向右边continue，
            // 他自己会i++，而且每一个节点都会分叉，分叉的不一定相等我需要将分差之后相等的给合并
            //答案的思路是从每个step的头节点遍历，如果不是回文串就+1，是回文川就push回文串进入递归。
            if(!huiwenStr(s,step,i)) continue//答案
            path.push[s[i]]
            backtrack(i+1)
            path.pop()
        }
    }
    backtrack(0)
    return res
    
};
// 以后遇到这类题只需要考虑push的值是什么最正确
// 思路：每个节点遍历完之后会跳会上一个节点，
// 我想到的是：如果节点下一步是===上一步的值，
    // if(i>step &&s[i]===s[i-1]){
    //             s[i]=s[step]+s[step]
    //         }