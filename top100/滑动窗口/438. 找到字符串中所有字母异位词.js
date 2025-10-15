var findAnagrams = function (s, p) {
  const result = [];
  const pLen = p.length;
  const sLen = s.length;
  if (pLen > sLen) return result;
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  const aIndex = "a".charCodeAt(0);
  let matches = 0;
  for (let i = 0; i < pLen; i++) {
    const sIndex = s.charCodeAt(i) - aIndex;
    const pIndex = p.charCodeAt(i) - aIndex;
    sCount[sIndex]++;
    pCount[pIndex]++;
  }
  for (let i = 0; i < 26; i++) {
    if (sCount[i] === pCount[i]) {
      matches++;
    }
  }
  if (matches === 26) {
    result.push(0);
  }
  let left = 0;
  for (let right = pLen; right < sLen; right++) {
    const leftRemoveInd = s.charCodeAt(left) - aIndex;
    //移出前相等就先--
    if (sCount[leftRemoveInd] === pCount[leftRemoveInd]) {
      matches--;
    }
    sCount[leftRemoveInd]--;
    //如果当前节点移除后相等
    if (sCount[leftRemoveInd] === pCount[leftRemoveInd]) {
      matches++;
    }
    left++;
    const rightIndex = s.charCodeAt(right) - aIndex;
    if (sCount[rightIndex] === pCount[rightIndex]) {
      matches--;
    }
    sCount[rightIndex]++;
    //如果当前节点移除后相等
    if (sCount[rightIndex] === pCount[rightIndex]) {
      matches++;
    }
    if (matches === 26) {
      result.push(left);
    }
  }
  return result;
};
