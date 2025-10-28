var longestPalindrome = function(s) {
    if(s.length<=1) return s
    let resMax=1
    let start=0
    function expand(l,r){
       while(s[l]===s[r]&&l>=0&&r<s.length){
        l--
        r++
       }
       return  r-l-1
    }
    for(let i=0;i<s.length;i++){
        const len1=expand(i,i)
       const len2= expand(i,i+1)
       const curMax=Math.max(len1,len2)
       if(curMax>resMax){
        resMax=curMax
        start=i-Math.floor((resMax-1)/2)
       }
    }
    return s.substring(start,start+resMax)
};
// console.log("babad")
longestPalindrome("babad")
//思路就是将每个值当做一个中心向外扩散，然后这个值可能是奇数长度的中心，也可能是偶数的
var longestPalindrome = function(s) {
    let start=0
    let n=s.length
    let maxLen=0
    let curMax=0
    function expand(l,r){
        while(s[l]===s[r]&&l>0&&r<n){
            l--
            r++
        }
        return r-l-1
    }
    for(let i=0;i<n;i++){
        const len1=expand(i,i)
        const len2=expand(i,i+1)
        curMax=Math.max(len1,len2)
        if(curMax>maxLen){
            maxLen=curMax
            //向左偏移的位置
            start=i-Math.floor(maxLen-1/2)
        }
    }
    return s.substring(start,start+maxLen)
}