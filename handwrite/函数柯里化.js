function curry(fn) {
  // 保存原函数需要的参数总数量，
  const argLength = fn.length;
  // 保存已接收的参数
  const args = [];

  // 返回一个收集参数的函数
  const collectArgs = function(currentArg) {
    // 收集当前参数
    args.push(currentArg);
    // 若参数数量未满足，继续返回收集函数；否则执行原函数
    if (args.length < argLength) {
      return collectArgs; // 继续收集
    } else {
      return fn.apply(this, args); // 执行原函数
    }
  };

  return collectArgs;
}

// 测试：柯里化一个多参数函数
function sum(a, b, c, d) {
  return a + b + c + d;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4)); // 10（参数足够，执行）
// console.log(curriedSum(1)(2)(3)); // 函数（参数不足，继续等待）
// 思路：利用闭包，分步收集数据，挨个函数返回自身，然后再满足条件之后才会执行
const curryFunc=(fn)=>{
    const len=fn.length
    const args=[]
    function inFn(arg){
        args.push(arg)
        if(args.length<len){
            return inFn
        }else{
            return fn.apply(this,args)
        }
    }
    return inFn
}

