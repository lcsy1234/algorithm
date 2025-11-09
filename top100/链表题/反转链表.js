// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// //接发一
// // var reverseList = function (head) {
// //     let prev=null
// //     let cur=head
// //     while(cur){
// //         const next=cur.next
// //         cur.next=prev
// //         prev=cur
// //         cur=next
// //     }
// //     return prev
// // };
// console.log(reverseList([1,2,3,4,5]))
// 思路：反转链表，虚拟节点，当前节点先记录下来，然后当前的节点指针反转
var reverseList = function (head) {
    let prev=null
    let cur=head
    while(cur){
        const next=cur.next
        cur.next=prev
        prev=cur
        cur=next
    }
    return prev
};
