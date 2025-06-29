// /**
//  * @param {string} s
//  * @return {string}
//  */
// var removeDuplicates = function(s) {
//    const sArr=Array.from(s)
//    const n=sArr.length
//    const newArr=[]
   
//      for(let i=0;i<n;i++){
//         if(sArr[i]!==sArr[i+1] && sArr[i]!==sArr[i-1]|| (sArr[i]===sArr[i+1] && sArr[i]===sArr[i-1])){
//             newArr.push(sArr[i])
//         }
//     }
//     console.log(newArr)
//      console.log(n)
//      if(newArr.length===n){
//         return newArr.join('')
//      }
     

//     return removeDuplicates(newArr.join(''))
// };
// removeDuplicates('aaaaaaaa')
//解法二
var removeDuplicates = function(s) {
   const stack=[]
   for(let i=0;i<s.length;i++){
    if(i>0 && stack[stack.length-1]===s[i]){
        stack.pop()
    }else{
        stack.push(s[i])
    }
   }
   return stack.join('')
};
removeDuplicates("abbaca")


