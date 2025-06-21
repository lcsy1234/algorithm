/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummyHead=new ListNode(0,head)
    let cur=dummyHead
    while(cur.next!==null && cur.next.next!==null){
        let node1=cur.next
        let node2=cur.next.next
        cur.next=node2
        node1.next=node2.next
        node2.next=node1
        cur=node1
    }
    
};