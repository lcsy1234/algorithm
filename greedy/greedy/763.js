function partitionLabels(s) {
    //找到当前的字母在未知中的最远的位置，在这阶段中有没有字母的最大值大于交换max
    //当前字母的最大位置遍历然后得到最后一个值
    const n = s.length
    const last = new Array(26).fill(0)
    const result=[]
    // 这一步是在arr里面记录
    for (let i = 0; i < n; i++) {
        //是当前字母的银蛇为0-25的位置
        const charCode = s.charCodeAt(i) - 'a'.charCodeAt(0)
        last[charCode] = i
    }
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i) - 'a'.charCodeAt(0);
        end = Math.max(end, last[charCode]); // 更新当前片段的最远边界
        if(i===end){
            result.push(end-start+1)
            start=i+1
        }
    }
}
console.log(partitionLabels("ababcbacadefegdehijhklij"));
