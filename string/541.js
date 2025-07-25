/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const n=s.length
    const arr=Array.from(s)
    for(let i=0;i<n;i+=2*k){
        reverse(arr,i,Math.min(i + k, n) - 1)
    }
    return arr.join('')
    }
   
 const reverse=function(arr,left,right){
        while(left<right){
            const temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp
            left++
            right--
        }}

