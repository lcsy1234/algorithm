// 思路：记录第一个第二个节点，然后将第一个节点指向second.next
var swapPairs = function (head) {
    const dummyHead=new ListNode(0,head)
    let cur=dummyHead
    while(cur.next &&cur.next.next){
        let first=cur.next
        let second=cur.next.next
        first.next=second.next
        second.next=first
        cur.next=second
        cur=first
    }
    return dummyHead.next
}