const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let T = null;
  let caseCount = 0;
  while ((line = await readline())) {
    if (T === null) {
      T = parseInt(line);
    } else {
      let tokens = line.split(" ");
      let N = BigInt(tokens[0]);
      let d = BigInt(tokens[1]);
      const count = new Array(Number(d)).fill(0n);
      for (let num = 1n; num <= N; num++) {
        const remainder = Number(num % d);
        count[remainder]++;
      }
      let maxSelect = 0n;
      if (count[0] > 0n) {
        maxSelect += 1n;
      }
      const halfD = Math.floor(Number(d) / 2);
      for (let i = 1; i <= halfD; i++) {
        const j = Number(d) - i;
        if (i !== j) {
          maxSelect += count[i] > count[j] ? count[i] : count[j];
        } else {
          if (count[i] > 0n) {
            maxSelect += 1n;
          }
        }
      }
      const K=maxSelect+1n
      console.log(Number(K))
      caseCount++
      if(caseCount===T){
        rl.close()
        break
      }
    }
  }
})();
