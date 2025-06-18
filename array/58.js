function rangeSumFunc(nums,a,b){
    const readline = require('readline');
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    let inputLines=[]
    rl.on('line',(line)=>{
        inputLines.push(line.trim())
    })
    rl.on('close',()=>{
        let n=parseInt(inputLines[0])
        let newArr= new Array(n)//为什么不能用 let newArr=[]
        newArr[0]=parseInt(inputLines[1])//[3,1,2,3] [1,3,6]
        for(let i=1;i<n;i++){
            newArr[i]= parseInt(inputLines[i+1])+newArr[i-1]
        }

        let range=[]
        let left=0
        let right=inputLines.length
        for(let i=n+1;i <inputLines.length;i++){
            // let range=[left,right]
            range=inputLines[i].split(' ')
         
            left=range[0]
            right=range[1]
           if(left==0){
             console.log(newArr[right])

            
             }
             else{
                 console.log(newArr[right]-newArr[left-1])
             }
        

            
           
        }


      

    


    })
    




    
}
rangeSumFunc()