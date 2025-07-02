// var combine = function(n, k) {
//     const ans = [];
//     const dfs = (cur, n, k, temp) => {
//         // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
//         if (temp.length + (n - cur + 1) < k) {
//             return;
//         }
//         // 记录合法的答案
//         if (temp.length == k) {
//             ans.push(temp);
//             return;
//         }
//         // 考虑选择当前位置
//         dfs(cur + 1, n, k, [...temp, cur]);
//         // 考虑不选择当前位置
//         dfs(cur + 1, n, k, temp);
//     }
//     dfs(1, n, k, []);
//     return ans;
// };
//解法二
//思路是定义二叉树，n是宽度，k是深度，终止条件是当存储节点的数组的长度等于k；
//
// var combine = function (n, k) {
//   // 回溯法
//   let result = [],
//     path = [];
//   let backtracking = (_n, _k, startIndex) => {
//     // 终止条件
//     if (path.length === _k) {
//       result.push(path.slice());
//       return;
//     }
//     // 循环本层集合元素
//     for (let i = startIndex; i <= _n; i++) {
//       path.push(i);
//       //   递归
//       backtracking(_n, _k, i + 1);
//       path.pop()
//       //   回溯操作
//     }
//   };
//   backtracking(n, k, 1);
//   return result;
// };
// combine(4,2)
//我自己来写
const combine=function(n,k){
 const path=[]
 const res=[]
 const backTracking=function(_n,_k,startIndex){
    if(path.length===_k){
        res.push(path.slice())
        return
    }
    for(let i=startIndex;i<=n;i++){
        path.push(i)
        backTracking(_n,_k,i+1)
        path.pop()
    }
}
backTracking(n,k,1)
return res
}
combine(4,2)
//思路