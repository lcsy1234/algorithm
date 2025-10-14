function lengthOfLongestSubstring(s) {
  let maxLen = 0;
  let left = 0;
  const map = new Map();
  for (right = 0; right < s.length; i++) {
    const curChar = s[right];
    if (map.has(curChar) && map.get(curChar) >= left) {
      left = charIndexMap.get(currentChar) + 1;
    }
    map.set(curChar, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
