/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function (strs) {
  const map =new Map()
  for(let i=0;i<strs.length;i++){
    const str= strs[i].split("").sort().join("")
   if(map.has(str)){
    map.get(str).push(strs[i])
   }else{
    map.set(str,[strs[i]])
   }
  }
  return Array.from(map.values())

};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
