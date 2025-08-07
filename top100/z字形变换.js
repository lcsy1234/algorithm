// var convert = function(s, numRows) {
//     const n = s.length, r = numRows;
//     if (r === 1 || r >= n) {
//         return s;
//     }
//     const t = r * 2 - 2;
//     const c = Math.floor((n + t - 1) / t) * (r - 1);
//     const mat = new Array(r).fill(0).map(() => new Array(c).fill(0));
//     for (let i = 0, x = 0, y = 0; i < n; ++i) {
//         mat[x][y] = s[i];
//         if (i % t < r - 1) {
//             ++x; // 向下移动
//         } else {
//             --x;
//             ++y; // 向右上移动
//         }
//     }
//     const ans = [];
//     for (const row of mat) {
//         for (const ch of row) {
//             if (ch !== 0) {
//                 ans.push(ch);
//             }
//         }
//     }
//     return ans.join('');
// };
// console.log(convert("PAYPALISHIRING",4))
// i=0, <3  x=1
// p a i=1,x=2 
// pay i=2,x=3 
// payp i=3, x=2,y=1 
//paypa i=4 ,x=1,y=2
//paypal i=5 , x=0,y
//


// 思路：
// 模拟：首先我要新建一个二维数组，我要知道行和列，列就n=20；row=5  t=8。  20/8=2   27/8=3
// z字形变换需要知道什么时候向下和什么时候需要斜向上，得到周期，z字形需要斜向上到r-2掐头去尾
//当前字符是5 6%6=5 应该在斜向上的位置 在行的时候得向下
// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
var convert = function(s, numRows) {
    const row=numRows
    const n=s.length
    //一个周期是指是完成一个周期所需要的字符串长度，每一个周期都占用r-1列表
    const t= row * 2 - 2
    //所有列就是
    const col=Math.ceil((n / t)) * (row - 1);
    const mat=new Array(row).fill(0).map(()=>new Array(col).fill(0))
    for(let i=0,x=0,y=0;i<n;i++){
         mat[x][y]=s[i]//p  //
         //如果字符要向下，且下标从0开始，r=4 需要x向下走3步，因为一开始就在最上面
         if(i%t<row-1){
            x++
         }
         //字符要开始斜着向上了
         else{
            x--
            y++
         }
         //周期结束的时候i=5此时是周期末尾下一个就讲x=0了，
         //最后结束的时候mat
    }
    let resArr=[]
    //mat=[['p',0,0...],['a',0,0..]]...
    for(let i=0;i<row;i++){
       for(let j=0;j<mat[i].length;j++){
        //判断当前的值不为0，就push到结果数组
        if(mat[i][j]!==0){
            resArr.push(mat[i][j])
        }
       }
    }
return resArr.join('')
    
};
console.log(convert("PAYPALISHIRING",4))