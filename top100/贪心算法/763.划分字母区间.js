function partitionLabels(s) {
    let n=s.length
    let last={}
    //思路是获得当前所有的字符的最后的位置
    for(let i=0;i<n;i++){
        last[s[i]]=i
    }
    //在出现的字符中的最远的索引，更新为end当i到当前end的时候说明已经出现前面所有字符的最远索引
    let end=0
    let start=0
    const result=[]
    for(let i=0;i<n;i++){
        end=Math.max(end,last[s[i]])
        if(i===end){
            result.push(end-start+1)
            start=end+1
        }
    }
    return result
}

// // 测试示例
// const s = "ababcbacadefegdehijhklij";
// console.log(partitionLabels(s)); // 输出: [9, 7, 8]
