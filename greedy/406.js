/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    //根据身高排序,如果相等就按照k升序
    people.sort((a,b)=>{
        if(a[0]!==b[0]){
            return b[0]-a[0]
        }else{
             return a[1]-b[1]
        }
    })
    const result=[]
    for(let i=0;i<people.length;i++){
        result.splice(people[i][1],0,people[i])
    }
    return result
};