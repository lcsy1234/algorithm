// 思路：先记录是否有链表，如果有的话就继续
//公式是head节点=>入口就等于，
var detectCycle = function (head) {
    let hasCycle=false
    let slow=head
    let fast=head
    while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast){
            hasCycle=true
            break
        }
    }
    if(!hasCycle){
        return null
    }
    let prev1=head
    let prev2=slow
   
    return prev1
}