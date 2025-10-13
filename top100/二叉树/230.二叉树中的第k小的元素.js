var kthSmallest = function(root, k) {
    let result=null
    let count=0
   const find=(node)=>{
    if(!node ||result!==null) return 
    find(node.left)
    count++
    if(count===k){
        result =node.val
        return 
    }
    find(node.right)
   }
   find(root)
   return result
}