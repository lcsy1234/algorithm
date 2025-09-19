
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const resArr = [intervals[0]]//
    for (let i = 1; i < intervals.length; i++) {
        //记录当前处理的数组的,
        let last=resArr[resArr.length-1]
        if(intervals[i][0]<=last[1]){
             last[1]=Math.max(last[1],intervals[i][1])
        }else{
            resArr.push(intervals[i])
        }
    }
    return resArr
};
//合并的思路：
//1.先对数组进行排序，按照每个子数组的第一个元素进行排序
//2.然后创建一个结果数组，初始时将第一个子数组放入结果数组中
//3.遍历排序后的数组，对于每个子数组，比较它的第一个元素和结果数组中最后一个子数组的第二个元素
//4.如果当前子数组的第一个元素小于等于结果数组中最后一个子数组的第二个元素，说明有重叠，更新结果数组中最后一个子数组的第二个元素为两者的最大值
//5.如果没有重叠，则将当前子数组直接添加到结果数组中
//6.最后返回结果数组