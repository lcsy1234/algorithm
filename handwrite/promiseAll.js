// // 静态方法：myPromise.all
//   function all(promises) {
//     // 返回一个新的 Promise
//     return new myPromise((resolve, reject) => {
//       // 边界处理：非数组输入直接报错
//       if (!Array.isArray(promises)) {
//         return reject(new TypeError("The input must be an array"));
//       }

//       const result = []; // 存储所有成功结果（按输入顺序）
//       let completedCount = 0; // 已完成的 Promise 数量
//       const total = promises.length; // 总数量

//       // 空数组直接 resolve
//       if (total === 0) {
//         return resolve(result);
//       }

//       // 遍历每个元素（处理非 Promise 值）
//       promises.forEach((promise, index) => {
//         // 用 myPromise.resolve 包装，确保非 Promise 值也能按 Promise 处理
//         myPromise.resolve(promise).then(
//           (value) => {
//             // 按索引存储结果（保证顺序与输入一致）
//             result[index] = value;//一个promise
//             completedCount++;

//             // 所有 Promise 都成功时，resolve 结果数组
//             if (completedCount === total) {
//               resolve(result);
//             }
//           },
//           (reason) => {
//             // 有一个失败，立即 reject（只触发一次）
//             reject(reason);
//           }
//         );
//       });
//     });
//   }
//     // 辅助静态方法：将值转为 myPromise（处理非 Promise 输入）
//   function resolve(value) {
//     if (value instanceof myPromise) {
//       return value; // 如果是 myPromise 实例，直接返回
//     }
//     // 否则返回一个新的成功状态 Promise
//     return new myPromise((resolve) => resolve(value));
//   }

// // 思路：就是首先帕努单是否是数组，然后返回一个新的promise
// //然后这个promise将每个promise放到
// class promise{

// }
// function all(promises){
//     return new promise((resolve,reject)=>{
//         if(!Array.isArray(promises)){
//             reject('不是数组')
//         }
//         //
//         const res=[]
//         const len=promises.length
//         if (len===0) resolve(res)
//         let count=0
//     //开始将数组中的内容给遍历出来
//     promises.forEach((promise,index)=>{
//         //然后有不同的请求，将请求用myPromise来包装
//         promise.resolve(promise).then((value)=>{
//             promise.
//         })
       

//     })

        
//     })
    
// }