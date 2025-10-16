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
//堆
var findKthLargest = function (nums, k) {
  const heap = [];
  //
  const heapify = function (index) {
    let smallest = index;
    let left = 2 * index + 1; //左节点的索引存在
    let right = 2 * index + 2;//右边节点
    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }
    //如果最小值不是当前节点就递归更新
    if (smallest !== index) {
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      heapify(smallest); // 递归调整子树
    }
  };
  //找到堆的size
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  }
  //非叶子节点因为有子节点，
  for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
    heapify(i);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap[0]) {
      heap[0] = nums[i];
      heapify(0);
    }
  }
  return heap[0];
};



