var line=read_line().trim().split(' ').map(Number)
const [x,n,k]=line
let maxLen=1
for(let i=1;i<=n;i++) maxLen*=2
if(k<1||k>maxLen){
    console.log(-1)
}
let count=0
let currentK=k
for(let i=n;i>=1;i--){
    const len=Math.pow(2,i)
    const half=len/2
    if(currentK<=half){
        count++
    }
   currentK=currentK>half?currentK-half:currentK
}
console.log(x+count)
// function findK(arr) {
//   const [x, n, k] = arr;
//   let count = 0;
//   let currentK = k;
//   for (let i = n; i >= 1; i--) {
//     const len = Math.pow(2, i);
//     const half = len / 2;
//     if (currentK <= half) {
//       count++;
//     }
//     currentK = currentK > half ? currentK - half : currentK;
//   }
//   return x+count
// }
// console.log(findK([4,4,7]))

