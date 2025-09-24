const lengthOfLongestSubstring=function(str){
    let n=str.length
    let maxLen=0;
    let left=0;
    const map=new Map()
    for(let right=0;right<n;right++){
        const char=str[right]
        if(map.has(char)&& map.get(char) >= left){
            left = map.get(char) + 1;
        }
        map.set(char,right)
        maxLen=Math.max(maxLen,right-left+1)
    }
    return maxLen
}
console.log(lengthOfLongestSubstring("abcabcbb")); // 3（"abc"）