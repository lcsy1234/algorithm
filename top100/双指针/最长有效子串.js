const maxValid =()=>{
    let maxLen=0
        let start=0
        let curStart=0
        let curLen=0
        const validCahar=/^[a-zA-Z0-9_]/
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