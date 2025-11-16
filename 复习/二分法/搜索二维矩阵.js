var searchMatrix = function (matrix, target) {
  //找到剧中的位置，然后思路跟二分查找一样
  let m = matrix.length;
  let n = matrix[0].length;
  if (m === 0 || n === 0) return false; // 空矩阵直接返回false
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const current = matrix[row][col];
    if (current === target) {
      return true;
    } else if (current < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
