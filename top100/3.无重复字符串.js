/**
 * @param {string} s
 * @return {number}
 */
//最长重复的
var lengthOfLongestSubstring = function (s) {
  let len = 1;
  let maxLen = 0;
  let sArr = Array.from(s);
  for (let i = 1; i < sArr.length; i++) {
    //当前值跟上一个值进行比较
    while (sArr[i] === sArr[i - 1]) {
      len + 1;
      i++;
    }
    maxLen = Math.max(len, maxLen);
    len = 1;
  }
  return maxLen;
};
//最长不重复的，得用hashb表了，
/**
 * @param {string} s
 * @return {number}
 */
// 思路：把当前的值存储到hash表中，连续的字符串，
var lengthOfLongestSubstring = function (s) {
  const hashObj = new Map();
  let left = 0;
  let maxLen=0
  for (let right = 0; right < s.length; right++) {
     const cur=s[right]
    if (hashObj.has(s[right]) && hashObj[s[right]] >= left) {
        //当前的左边界移动到新的左边界
      left = hashObj.get(cur) + 1;
    }
    hashObj.set(cur, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen
};
