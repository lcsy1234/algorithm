/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s; // 空字符串或单个字符直接返回

  let start = 0; // 最长回文子串的起始索引
  let maxLen = 1; // 最长回文子串的长度

  // 中心扩展函数：从l和r向两边扩展，返回最长回文长度
  function expand(l, r) {
    // 当左右字符相等且不越界时，继续扩展
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    // 退出循环时，有效回文范围是 [l+1, r-1]，长度为 (r-1)-(l+1)+1 = r-l-1
    return r - l - 1;
  }

  for (let i = 0; i < s.length; i++) {
    // 奇数长度回文（中心是单个字符i）
    const len1 = expand(i, i);
    // 偶数长度回文（中心是i和i+1）
    const len2 = expand(i, i + 1);

    // 取两种情况的最大长度
    const currentMax = Math.max(len1, len2);

    // 更新最长回文的位置和长度
    if (currentMax > maxLen) {
      maxLen = currentMax;
      // 计算起始索引：中心i向左移动 (maxLen-1)/2 步
      start = i - Math.floor((maxLen - 1) / 2);
    }
  }

  // 截取并返回最长回文子串
  return s.substring(start, start + maxLen);
};
console.log(longestPalindrome("cbbd"));
/**
 * @param {string} s
 * @return {string}
 */
// 思路：分两种情况一个是中间是bab一种是abba，第二是要获得当前的左边界
var longestPalindrome = function (s) {
  if (s.length === 0) return 0;
  let resMax = 1;
  let start = 0;
  function expand(l, r) {
    while (s[l] === s[r] && l >= 0 && r < s.length) {
      l--;
      r++;
    }
    return r - l - 1;
  }
  for (let i = 0; i < s.length; i++) {
    const len1 = expand(i, i);
    const len2 = expand(i, i + 1);
    const curMax = Math.max(len1, len2);
    if (curMax > resMax) {
      resMax = curMax;
      start = i - Math.floor((resMax - 1) / 2);
    }
  }
  return s.substring(start, start + resMax);
};
console.log(longestPalindrome("cbbd"));
