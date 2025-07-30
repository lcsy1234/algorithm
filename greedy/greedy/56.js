// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// //主要不会的是因为要变动数组之后向里面push一个新的之后如果变动还要删除刚刚push的元素然后添加现在的变更的元素，
// //所以解决办法就是见一个新的数组然后这个元素里面
// var merge = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   let len = intervals.length;
//   const resArr = [intervals[0]]; //[[1,3]]
//   for (let i = 1; i < len; i++) {
//     let last = resArr[resArr.length - 1]; //[1,3]
//     let front = intervals[i][0];
//     if (last >= front) {
//       //主要问题就是，这个数组变化之后什么时候才能push到res
//       last[1] = Math.max(end, intervals[i][1]);
//     } else {
//       resArr.push(last);
//     }
//   }
//   return resArr;
// };
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const resArr = [intervals[0]]//[[1,6]]
    for (let i = 1; i < intervals.length; i++) {
        //浅拷贝
        let last=resArr[resArr.length-1]//[1,3][1,6]
        if(intervals[i][0]<=last[1]){
             last[1]=Math.max(last[1],intervals[i][1])//last [1,6]
        }else{
            resArr.push(intervals[i])
        }
    }
    return resArr
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
