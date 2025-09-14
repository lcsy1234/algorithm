const handleClick=()=>{
    console.log('click')
}
const throttle=(fn,timer)=>{
    let last=0
    return function(...args){
        let now=Date.now()
        if((now-last)>timer){
            fn.apply(this,args)
            last=now
        }
        }
}

//防抖
const debounce=(fn,timer)=>{
    let timeout=null
    return function(...args){
        if(timeout)clearTimeout(timeout)
        timeout=setTimeout(()=>{
            fn.apply(this,args)
        },timer)
    }
}

// el.addEventListener('click',betterThrottle(handleClick,2000))\


