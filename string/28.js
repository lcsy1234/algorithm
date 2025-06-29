// // /**
// //  * @param {string} haystack
// //  * @param {string} needle
// //  * @return {number}
// //  */
// // var strStr = function(haystack, needle) {
// //    const hayLen=haystack.length
// //    const needlen=needle.length
// //    let index=0
// //    let count=0
// //     if(needlen>hayLen) return -1
// //     for(let i=0;i<hayLen;i++){
// //        if(haystack[i]===needle[0]){
// //          index=i
// //          for(let j=0;j<needlen;j++){
// //             if(haystack[j+i]!==needle[j]){
// //                 return -1
// //             }
// //             count++
// //          }
// //          if(count===needlen){
// //             return index
// //          }
// //        }
// //     }
// //     console.log(index)
// //    return index
// // };
// // strStr("hello","ll")
// //
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// //考虑后面有重复的
// //前面有重复但是是错的，后面有重复正确的
// // 所以思路是
// var strStr = function(haystack, needle) {
//     const hayLen=haystack.length
//     const needLen=needle.length 
//     let index=-1
//     let count=0
//     for(let i=0;i<hayLen;i++){
//         for(let j=0;j<needLen;j++){
//             if(haystack[i]===needle[0]){
//                 index=i
//                 count++
//                 if(haystack[i+j]!==needle[j]){
//                      break
//                 }else if(j===needLen-1){
//                     return index
//                 }
//             }
//         } 
       
//     }
//       return -1   
// };
// strStr("mississippi","issip")
//解法二
var strStr = function (haystack, needle) {
    if (needle.length === 0)
        return 0;
    //我要得到前缀表next
    const getNext=function(pattern){
        //首先我要定义末尾指针以及初始化next
        const len=neddle.length
        const next=new Array(len).fill(0)
        let j=-1
        next[0]=j
        for(let i=1;i<len;i++){
            //回退,前缀后缀不相等，
            //j>=0,是因为不能再回退了
            while(j>=0&&pattern[i]!==pattern[j+1]){
                next[j]=j
            }
            // 前缀后缀相等就向
            if(pattern[i]===pattern[j+1]){
                j++
            }
            next[i]=j
        }
        return next
    }

    

    let next = getNext(needle);//[ -1, -1, -1, 0, -1 ]
    let j = -1;
    for (let i = 0; i < haystack.length; ++i) {
        while (j >= 0 && haystack[i] !== needle[j + 1])
            j = next[j];
        if (haystack[i] === needle[j + 1])
            j++;
        if (j === needle.length - 1)
            return (i - needle.length + 1);
    }

    return -1;
};
strStr("mississippi","issip")
