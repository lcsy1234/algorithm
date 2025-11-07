
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let t = null;
  while ((line = await readline())) {
    if (t === null) {
      t = parseInt(line);
    } else {
    //   const n = parseInt(line);
      const aLine = await readline();
      const a=aLine.split(' ').map(Number)
      const activited = new Set();
      let coldStart = 0;
      for (const pos of a) {
        if (activited.size === 0) {
          activited.add(pos);
        //   coldStart = 1;
        } else {
          const hasAdjacent = activited.has(pos - 1) || activited.has(pos + 1);
          if (hasAdjacent) {
            activited.add(pos);
          } else {
            activited.add(pos);
            coldStart++;
          }
        }
      }
      console.log(coldStart)
      t--
      if(t===0) break
    }
  }
  rl.close()
})();
