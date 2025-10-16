// 递归：先递后归，先执行
const quickSort = (arr) => {
  console.log("%c Line:26 🥟 arr", "color:#7f2b82", arr);
  if (arr.length <= 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2); //3
  const pivot = arr.splice(pivotIndex, 1)[0]; //删除中间元素并提取
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  console.log("%c Line:39 🍇 left", "color:#2eafb0", left);

  return quickSort(left).concat([pivot], quickSort(right));
};

function quickSort(array) {
  //先去重
  //   const arr=[...new Set(array)];
  const arr = arr.filter((item, index) => {
    // 只保留「第一个出现的元素」
    return arr.indexOf(item) === index;
  });
  if (arr.length <= 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2); //得到中间值
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// const arr = [3, 6, 8, 10, 1];
// console.log(quickSort(arr)); // [1, 1, 2, 3, 6, 8, 10]
//斐波那契数列

//手写快速排序
// 思路：
// 1.选择一个基准值，一般选择第一个值
// 2.定义两个指针，一个指向数组的开头，一个指向数组的结尾
// 3.从右边开始遍历，找到第一个小于基准值的值，交换位置
// 4.从左边开始遍历，找到第一个大于基准值的值，交换位置
// 5.重复3和4，直到两个指针相遇
// 6.将基准值放到指针相遇的位置
// 7.递归排序基准值左边和右边的数组
// function quickSort2(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         const pivotIndex = partition(arr, left, right);
//         quickSort2(arr, left, pivotIndex - 1);
//         quickSort2(arr, pivotIndex + 1, right);
//     }
//     return arr;
// }
// function partition(arr, left, right) {
//     const pivot = arr[left];
//     let i = left;
//     let j = right;
//     while (i < j) {
//         while (i < j && arr[j] >= pivot) {
//             j--;
//         }
//         if (i < j) {
//             arr[i] = arr[j];
//             i++;
//         }
//         while (i < j && arr[i] <= pivot) {
//             i++;
//         }
//         if (i < j) {
//             arr[j] = arr[i];
//             j--;
//         }
//     }
//     arr[i] = pivot;
//     return i;
// }
// const arr2 = [3, 6, 8, 10, 1, 2, 1];
// console.log(quickSort2(arr2)); // [1, 1, 2, 3, 6, 8, 10]

// //手写归并排序
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
//     return merge(mergeSort(left), mergeSort(right));
// }
// function merge(left, right) {
//     const result = [];
//     let i = 0;
//     let j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }
// const arr3 = [3, 6, 8, 10, 1, 2, 1];
// console.log(mergeSort(arr3)); // [1, 1
