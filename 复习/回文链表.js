var isPalindrome = function (head) {
    // 思路：先记录值，然后判断，
    const value=[]
    let cur=head
   while(cur){
    value.push(cur.val)
    cur=cur.next
   }
   let left=0
   let right=value.length-1
   while(left<right){
    if(value[left]!==value[right]){
        return false
    }
    left++
    right--
   }
   return true
}
