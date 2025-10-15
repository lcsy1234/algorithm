// //思路：快速排序
// const quickSort = (nums) => {
//   const len = nums.length;
//   if (len <= 1) return nums;
//   const mid = nums[Math.floor(len / 2)];
//   const left = [];
//   const right = [];
//   const middle = [];
//   for (let i = 0; i < len; i++) {
//     if (nums[i] < mid) {
//       left.push(nums[i]);
//     } else if (nums[i] > mid) {
//       right.push(nums[i]);
//     } else {
//       middle.push(nums[i]);
//     }
//   }
//   return [...quickSort(left), ...middle, ...quickSort(right)];
// };
// quickSort([9, 6, 7, 3, 4, 2]);
// 思路：分区定位+定向递归
function findKthLargest(nums, k) {
  // 转换为“第k小”问题（从0开始索引）
  const targetIndex = nums.length - k;
  
  function quickSelect(left, right) {
    const pivot = nums[right]; // 选最右元素为基准
    let pivotIndex = left;//
    
    // 分区：将小于基准的元素移到左侧
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
        pivotIndex++;
      }
    }
    // 基准值放到最终位置
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
    
    // 递归查找目标
    if (pivotIndex === targetIndex) return nums[pivotIndex];
    if (pivotIndex < targetIndex) return quickSelect(pivotIndex + 1, right);
    return quickSelect(left, pivotIndex - 1);
  }
  
  return quickSelect(0, nums.length - 1);
}

findKthLargest([3, 6, 8, 10, 1, 2, 4],3)

//手写
//思路：分区治理，转化为第k小，递归查找目标值
function findKthLargest(nums,k){
    const len=nums.length
    const targetIndex=len-k
   function quickSelect(left,right){
    const pivot=nums[right]
    let  baseValInd =left
    for(let i=left;i<right;i++){
       if(nums[i]<=pivot){
        [nums[i],nums[left]]=[nums[left],nums[i]]
        baseValInd++
       }
    }
     // 基准值放到最终位置
    [nums[baseValInd], nums[right]] = [nums[right], nums[baseValInd]];
    //
    if(baseValInd===targetIndex){
        return nums[baseValInd]
    }
    if(baseValInd<targetIndex){
        return quickSelect(baseValInd+1,right)
    }
    return quickSelect(left,baseValInd-1)
   }
   return quickSelect(0,len-1)
}


