const throttle = (fn, interval) => {
  let last = 0;
  return function () {
    const now = new Date();
    const context = this;
    if (now - last > interval) {
      fn.apply(context, interval);
      last = now;
    }
  };
};
//最简单的
const debounce = (fn, interval) => {
  let timer = null;
  if (timer) clearInterval(timer);
  return function (...args) {
    const context=this
    timer=setTimeout(()=>{
        fn.apply(context,args)
        clearTimeout(timer)
    },interval)
  };
};
// 如果要立即执行
const debounce = (fn, interval,immediate) => {
  let timer = null;
  if (timer) clearInterval(timer);
  return function (...args) {
    const context=this
    if(immediate){
        const firstExecute=(!timer)
        if(firstExecute){
             fn.apply(context,args)
        }
        timer=setTimeout(()=>{
           timer=null
        },delay)
    }
    else{
        timer=setTimeout(()=>{
        fn.apply(context,args)
        clearTimeout(timer)
    },interval)
    }
  };
};
