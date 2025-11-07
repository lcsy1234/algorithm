const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let lineCount=0
    let n=0
    let a=[]
    while(line = await readline()){
        if(lineCount===0){
            n=parseInt(line.trim())
        }else if(lineCount===1){
            a=line.trim().split(' ').map(Number)
            const lastOccurrence=new Map()
            const result=[]
            for(let i=0;i<n;i++){
                if(a[i]===0){
                    for(let c=0;c<26;c++){
                        const char=String.fromCharCode('a'.charCodeAt(0)+c);
                        if(!lastOccurrence.has(char)){
                            result.push(char)
                            lastOccurrence.set(char,i);
                            break
                        }
                    }
                }else{
                    const prevChar=result[a[i]-1];
                    result.push(prevChar)
                    lastOccurrence.set(prevChar,i)
                }
            }
            console.log(result.join(''))
        }
        lineCount++
    }
}()