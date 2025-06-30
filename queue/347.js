// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function (nums, k) {
//     const wholeMap = new Map()
//     let n = nums.length
//     const res = []
//     for (let i = 0; i < n; i++) {
//         let getMapValue = wholeMap.get(nums[i])
//         wholeMap.set(nums[i], getMapValue ? (getMapValue + 1) : 1)
//     }
//     const arr = Array.from(wholeMap.entries())
//     arr.sort((a, b) => b[1] - a[1])
//     for (let i = 0; i < k; i++) {
//         res.push(arr[i][0])
//     }
//     return res
// };
// topKFrequent([1, 1, 1, 2, 2, 3], 2)
//解法二

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const n = nums.length
    const wholeMap = new Map()
    const res=[]
    for (let i = 0; i < n; i++) {
        const getMapValue = wholeMap.get(nums[i])
        wholeMap.set(nums[i], getMapValue ? getMapValue + 1 : 1)
    }
    const readySortArr = Array.from(wholeMap.entries())
    const sortArr=quickSort(readySortArr)
    const m=sortArr.length-1
    for(let i=m;i>m-k;i--){
        res.push(sortArr[i][0])
    }
    return res
};

function quickSort(arr) {
    const n=arr.length
    if (n<= 1) return arr;//
    const pivot =arr[Math.floor(Math.random()*n)][1]; // 随机元素排序标准
    const left = [];
    const right = [];
    const equal=[]
    // 分区操作
    for (let i = 0; i < n; i++) {
        if (arr[i][1] < pivot) {
            left.push(arr[i]);
        } else if(arr[i][1] > pivot){
            right.push(arr[i]);
        }else{
            equal.push(arr[i])
        }
    }
    return [...quickSort(left),  ...equal, ...quickSort(right)];
}
// console.log(quickSort([[3,3],[5,7],[7,9],[6,2],[4,1]]))

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))






