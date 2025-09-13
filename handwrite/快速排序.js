//快速排序
//思路：
//1.选择一个基准值，一般选择中间的值
//2.定义两个数组，左边存放小于基准值的值，右边存放大于基准值的值
//3.递归排序左右两个数组：为什么分左右两个数组？
//4.合并左右两个数组和基准值，
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const pivotIndex = Math.floor(arr.length / 2);//3
    const pivot = arr.splice(pivotIndex, 1)[0];//删除中间元素并提取
    console.log("%c Line:11 🍇 pivot", "color:#ffdd4d", pivot);//10 ，1，
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};
const arr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(arr)); // [1, 1, 2, 3, 6, 8, 10]

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