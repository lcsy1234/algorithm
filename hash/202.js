/**
 * @param {number} n
 * @return {boolean}
 */
// 思路：因为要查找一个数据集里面是否有一个值的存在
var isHappy = function(n) {
    let sumToApp=new Map()
    
    //得到值
   const sumMap=(num)=>{
    let sum=0
    let nstr=String(num)
     for(let i=0;i<nstr.length;i++){
        sum+=Math.pow(Number(nstr[i]),2)
    }
    return sum

   }
    while(true){
        
        if(sumToApp.has(n)) return false
        if(n===1)return true
        n=sumMap(n)
        sumToApp.set(n,1)
        
    }
    
};
isHappy(19)
// //解法
// var isHappy = function (n) {
//     let m = new Map()

//     const getSum = (num) => {
//         let sum = 0
//         while (n) {
//             sum += (n % 10) ** 2
//             n = Math.floor(n / 10)
//         }
//         return sum
//     }

//     while (true) {
//         // n出现过，证明已陷入无限循环
//         if (m.has(n)) return false
//         if (n === 1) return true
//         m.set(n, 1)
//         n = getSum(n)
//     }
// }
 
