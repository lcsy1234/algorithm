var lengthOfLongestSubstring = function (s) {
  const hashObj = new Map();
  let left = 0;
  let maxLen=0;
  for (let right = 0; right < s.length; right++) {
     const cur=s[right]
    if (hashObj.has(cur) && hashObj.get(cur)>= left){
        //当前的左边界移动到新的左边界
      left = hashObj.get(cur) + 1;
    }
    hashObj.set(cur, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen
};
 
