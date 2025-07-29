var findContentChildren=function(g,s){
    //思路是最小的胃口对应最小的饼干
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    const n=g.length
    const m=s.length
    let count=0
    for(let i=0,j=0;i<n,j<m;i++,j++){
        if(g[i]<=s[j]){
            count++
        }else{
            i--
        }
    }
    return count
}