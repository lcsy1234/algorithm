//用js实现sqrt方法
function sqrt(num) {
  if (num < 0) {
    return NaN;
  }
  if (num === 0) {
    return 0;
  }
  let left = 0;
  let right = num;
  let mid = 0;
  while (left <= right) {
    mid = (left + right) / 2;
    if (mid * mid === num) {
      return mid;
    } else if (mid * mid < num) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return right;
}
