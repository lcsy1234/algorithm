function climbStairs(n) {
    let arr=new Array(n+1)
    arr[1]=1;arr[2]=2
    for(let i=3;i<=n;i++){
        arr[i]=i-1+i-2
    }
    return arr[i]

}
let nnn = climbStairs(4)
console.log(nnn)

