/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length; // 矩阵行数
  if (m === 0) return false; // 空矩阵直接返回false
  const n = matrix[0].length; // 矩阵列数
  if (n === 0) return false; // 空行直接返回false

  let left = 0;
  let right = m * n - 1; // 总元素数-1（右边界）

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 中间索引. 5
    // 将mid转换为二维坐标：行=mid//n，列=mid%n
    const row = Math.floor(mid / n);
    const col = mid % n; //
    console.log("%c Line:21 🍎 col", "color:#3f7cff", row, col);
    const current = matrix[row][col];
    console.log("%c Line:23 🍤 current", "color:#ffdd4d", current);
    if (current === target) {
      return true; // 找到目标值
    } else if (current < target) {
      left = mid + 1; // 目标在右侧，左边界右移
    } else {
      right = mid - 1; // 目标在左侧，右边界左移
    }
  }

  return false; // 遍历结束未找到目标
};

// 测试用例
// console.log()); // 输出true（存在于第0行第1列）
searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3
); // 输出true（存在于第0行第1列）
