var hasCycle = function (head) {
    let hasCycle=false
    if(!head||!head.next){
        return false
    }
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
    return hasCycle
}