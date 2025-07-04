// //递归 爬楼梯
function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
}
console.log(climbStairs(4))
//
// const testFunc=function(){
    
//     for(let i=0;i<5;i++){


    


//     }
// }
