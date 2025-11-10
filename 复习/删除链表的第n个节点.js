// 思路：就是快慢指针，保持n个间距，如果，也就是快指针比满之战多n个节点
var removeNthFromEnd = function (head, n) {
    const dummyHead=new ListNode(0,head)
    let left=dummyHead
    let right=dummyHead
    for(let i=0;i<n;i++){
        right=right.next
    }
    //right.next
    while(right.next!==null){
        left=left.next
        right=right.next
    }
    left.next=left.next.next
    return dummyHead.next
}