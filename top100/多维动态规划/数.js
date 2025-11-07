const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let inputLines = [];
  while ((line = await readline())) {
    inputLines.push(line);
  }
  let ptr = 0;
  const n = parseInt(inputLines[ptr++]);
  if (n === 1) {
    console.log(1);
    rl.close();
    return;
  }
  const adj = Array(n + 1)
    .fill()
    .map(() => []);
  for (let i = 0; i < n - 1; i++) {
    const [u, v] = inputLines[ptr++].split(" ").map(Number);
    adj[u].push(v);
    adj[v].push(u);
  }
  const result = [];
  for (let k = 1; k <= n; k++) {
    const visited = Array(n + 1).fill(false);
    let componetCount = 0;
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        dfs(i, visited, adj);
        componetCount++;
      }
    } 
    result.push(componetCount)
  }
  console.log(result.join(' '))
  rl.close()
})();
function dfs(node,visited,adj){
    visited[node]=true
    for(const neighbor of adj[node]){
        if(!visited[neighbor]){
            dfs(neighbor,visited,adj)
        }
    }

}
