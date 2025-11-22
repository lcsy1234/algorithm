function jsonFunc(json,parent='',result=[]){
    if(json===null||typeof json===undefined) return result
    if(typeof json==='object' &&!Array.isArray(json)){
        Object.entries(json).forEach(([key,value])=>{
            const currentPath=parent?`${parent}.${key}`:key
              if(typeof value==='object'&&value!==null){
                jsonFunc(value,currentPath,result)
            }else{
                result.push({
                    key,
                    path:currentPath,
                    value:value,
                    type:typeof value
                })
            }

          
        })

    }
    return result 
}

jsonFunc()