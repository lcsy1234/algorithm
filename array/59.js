/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function(n) {
    let loop=Math.floor(n/2)
    let newMaxtrix=new Array(n).fill(0).map(()=>new Array(n).fill(0))
    let mid=Math.floor(n/2)
    let offset=1
    let num=1
    let raw=col=0
    while(loop--){
        
        for(;col<n-offset;col++){
            newMaxtrix[raw][col]=num
            num++
        }
        for(;raw<n-offset;raw++){
            newMaxtrix[raw][col]=num
            num++
        }
         for(;col>=offset;col--){
            newMaxtrix[raw][col]=num
            num++
        }
        for(;raw>=offset;raw--){
            newMaxtrix[raw][col]=num
            num++
        }
        raw++
        col++
        offset++
    }
    if(n%2){
        newMaxtrix[mid][mid]=num
    }
    console.log(newMaxtrix)
    return newMaxtrix
};
generateMatrix(4)

