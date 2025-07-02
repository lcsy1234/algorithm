// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// var letterCombinations = function(digits) {
//     if (digits.length === 0) return [];
    
//     const map = {
//         '2': 'abc',
//         '3': 'def',
//         '4': 'ghi',
//         '5': 'jkl',
//         '6': 'mno',
//         '7': 'pqrs',
//         '8': 'tuv',
//         '9': 'wxyz'
//     };
    
//     const result = [];
//     const path = [];
    
//     const backtrack = (index) => {
//         if (index === digits.length) {
//             result.push(path.join(''));
//             return;
//         }
        
//         const digit = digits[index];//‘2’ '3' '3'
//         const letters = map[digit];//‘abc’ 'edf' 
//         const len = letters.length;
        
//         // 使用传统for循环替代for...of
//         for (let i = 0; i < len; i++) {
//             path.push(letters[i]);//[a] [a,e]
//             backtrack(index + 1);
//             path.pop();
//         }
//     };
    
//     backtrack(0);
//     return result;
// };    
// 自己写
//思路：for循环，是节点的数字，递归传入的参数要包括能让回溯推到外轮廓之后节点的值
var letterCombinations = function(digits) {
    const path=[]
    const res=[]
    const len=digits.length
    if (digits.length === 0) return [];
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const  backtrack=function(str,index){
        const mapIndex=str[index] //'2'
        const inStr=map[mapIndex] //'abc'
        if(path.length===len){
            res.push(path.join(''))
            return
        }
        for(let i=0;i<inStr.length;i++){
            path.push(inStr[i])
            backtrack(str,index+1)//这一步使用来维护回溯退出后的外层框架返回值
            path.pop()
        }

    }
    backtrack(digits,0)
    return res
};    