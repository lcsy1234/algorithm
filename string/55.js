// const turnTurnFun=function(s,k){
//     let rightTemp=[]
//     let sArr=Array.from(s)
//     let n=s.length-1
//     for(let i=n;i>n-k;i--){
//         rightTemp.push(s[i])
//     }
//     sArr.length=n-k+1
//     let strPre=rightTemp.join('')
//     let strEnd=sArr.join('')
//     let resStr=strPre+strEnd
//     
//     return resStr
// }
// turnTurnFun('abcdefg',2)
//规范
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const inputs = []
rl.on('line', function (data) {
    inputs.push(data)
}).on('close', function () {
    // const res=deal(inputs)
    let string = inputs[1]
    let kNumber = Number(inputs[0])
    // console.log(inputs)
    // console.log(string)
    turnTurnFun(kNumber,string)

})
const turnTurnFun = function (k, s) {
    let rightTemp = []
    let sArr = Array.from(s)
    let n = s.length - 1

    for (let i = n; i > n - k; i--) {
        rightTemp.push(s[i])
    }
    sArr.length = s.length - k
    let strPre = rightTemp.join('')
    let strEnd = sArr.join('')
    let resStr = strPre + strEnd
    console.log(resStr)
    return resStr
}