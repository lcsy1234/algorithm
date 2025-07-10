// //分发饼干
// //思路先排序，然后如果小于就都加1，如果g[i++]===undefined 就退出整个循环
// //
// /**
//  * @param {number[]} g
//  * @param {number[]} s
//  * @return {number}
//  */

// var findContentChildren = function (g, s) {
//     s.sort((a,b)=>a-b)
//     g.sort((a,b)=>a-b)
//     let satisNum = 0
//     let i = 0, j = 0
//     let acula = 0
//     while (g[i] && s[j] && g[i] <= s[j]) {
//         i++
//         j++
//         satisNum++
//         while (g[i] && s[j] && g[i] > s[j]) {
//             acula += s[j]
//             if (g[i] <= acula) {
//                 satisNum++
//                 acula = 0
//                 i++
//                 break
//             }
//             j++
//         }
//     }
//     while (g[i] && s[j] && g[i] > s[j]) {
//         acula += s[j]//5 11 7 15
//         if (g[i] <= acula) {
//             satisNum++
//             acula = 0
//             i++
//         }
//         j++
//         while (g[i] && s[j] && g[i] <= s[j]) {
//             i++
//             j++
//             satisNum++
//         }
//     }

//     return satisNum
// };
// findContentChildren([10,9,8,7],[5,6,7,8])
// 7 8 9 10g
// 5 6 7 8s
// 7 8
// 5 6
//上述代码：超过了条件每个小孩儿只能有一个饼干，动态缩小遍历范围
//如果
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let satisNum = 0
    let i = 0, j = 0
    while (i < g.length && j < s.length) {
        if (g[i] >s[j]) {
            j++
        } else {
            satisNum++
            i++
            j++
        }
    }
    return satisNum
};
findContentChildren([1,2,3], [1, 1])
//官方题解双指针


