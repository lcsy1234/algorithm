// const readline=require('readline')
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
var line;
let input = [];
while ((line = read_line()) !== "") {
  input.push(line.trim().split(' ').map(Number));
}
let ptr = 0;
const t = input[ptr++][0];
for (let _ = 0; _ < t; _++) {
  const [n, c, d] = input[ptr++];
  const b = input[ptr++];
const a11=Math.min(...b)
const expectedArr=[]
for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        const val=a11+(i-1)*c+(j-1)*d
        expectedArr.push(val)
    }
}
expectedArr.sort((x,y)=>x-y)
const sortedB=[...b].sort((x,y)=>x-y)
// const bSet=new Set(b)
let valid=true
if(expectedArr.length!==sortedB.length){
    valid=false
}else{
    for(let k=0;k<expectedArr.length;k++){
        if(expectedArr[k]!==sortedB[k]){
            valid=false
            break
        }
    }
}
console.log(valid ? "YES" : "NO");
}
