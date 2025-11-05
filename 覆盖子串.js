/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //首先思路是定义两个map
    const needMap=new Map()
    const windowMap=new Map()
    let start=0
    for(let i=0;i<t.length;i++){
        needMap.set(t[i],(needMap.get(t[i])||0)+1)
    }
    //开始遍历widow来判断
    let left=0
    let right=0
    let valid=0
    let minLen=Infinity
    while(right<s.length){
        const c=s[right]
         right++
        if(needMap.has(c)){
            windowMap.set(c,(windowMap.get(c)||0)+1)
               if(windowMap.get(c)===needMap.get(c)){
                valid++
        }
        }
        while(valid===needMap.size){
            //开始收缩
            const currentLen = right - left;//
            if (currentLen < minLen) {
                start = left;
                minLen = currentLen;
            }
                 
            // 收缩窗口：左指针右移，移除字符d
            const d = s[left];
            left++;
             // 若d是需要的字符，更新window
            if (needMap.has(d)) {
                // 有的话就需要考虑移除当前的值的数量变化会不会导致不重复，数量相同一处就会让valid-1；
                if (windowMap.get(d) === needMap.get(d)) {
                    valid--;
                }
                //不影响就移除并且进行后续，然后继续往后遍历找到最短的
                windowMap.set(d, windowMap.get(d) - 1);
            }
        }
    }
   return minLen === Infinity ? "" : s.substring(start, start + minLen)
    
};