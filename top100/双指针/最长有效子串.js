//问题
const maxValid =()=>{
    let maxLen=0
        let start=0
        let curStart=0
        let curLen=0
        const validCahar=/^[a-zA-Z0-9_]$/
        for(let i=0;i<line.length;i++){
            const char=line[i]
            if(validCahar.test(char)){
               if(curLen===0){
                curStart=i
               }
               curLen++
               if(curLen>maxLen){
                maxLen=curLen
                start=curStart
            }
            }else{
                curLen=0
            }
    }
    return maxLen
}
// 问题最长有效子串，如果有效子串，如果valid里面有的话就+1，如果没有的话就right-left+1与maxLen
//最长无重复子串
//思路：最长无重复子串，要滑动窗口，
const maxString=(str)=>{
    const len=str.length
    let maxLen=0
    let start=0//主要是定位到字符串起始位置,如果包含的话就要从这个
    let curStart=0
    let curLen=0
    const validchar=/^[a-zA-Z0-9]$/
    for(let end=0;end<len;end++){
        const cur=str[end]
        //如果当前的validchar有的话就记录加一下长度
        if(validchar.test(cur)){
            //这一部分是是每次的重新计算长度，重新赋start
            if(curLen===0){
                curStart=end
            }
            curLen++
            //找到最长
            if(curLen>maxLen){
                maxLen=curLen
                start=curStart
            }
        }else{
            curLen=0
        }

    }
    return str.substring(start,start+maxLen)
}
// 思路：就是首先要符合标准，第二部得到连续子串的长度，第三部找到最长
const handCopy=(str)=>{
    const len=str.length
    let maxLen=0
    let start=0
    let curStart=0
    let curLen=0
    const validChar=/^[a-zA-Z0-9]$/
    for(let i=0;i<len;i++){
        const curChar=str[i]
        if(validChar.test(curChar)){
            //重新计算了
            if(curLen===0){
                curStart=i
            }
            curLen++
            //
            if(curLen>maxLen){
                maxLen=curLen
                start=curStart
            }
        }else{
            curLen=0
        }
    }
    return str.substring(start,start+maxLen)
}