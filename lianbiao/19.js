/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let sum = 0
    let cur = head
    let dummyHead=new ListNode(0,head)

    while (cur !== null) {
        sum++
        cur = cur.next
    }
    if (sum === 1) {
        return null
    }
    let temp = head

    for (let i = 1; i < sum - n; i++) {
        temp = temp.next
    }
    if (temp.next.next !== null) {
        temp.next = temp.next.next
    } else {
        temp.next = null
    }
    return head
};
// 官方的测试你函数的用例
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const head = new ListNode(1, null);
const node2 = new ListNode(2, null);
const node3 = new ListNode(3, null);
const node4 = new ListNode(4, null);
const node5 = new ListNode(5, null);
head.next = node2;
node2.next = node3
node3.next = node4
node5.next = node5
// removeNthFromEnd(head);
node2.next=node5;
console.log(head.next.next);
//解法二
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyhead=new ListNode(0,head)
    let front =0
    let back =0
    let cur=dummyhead
    while(cur ){
        front++
        cur=cur.next
        if(front>n){
            back++
        }
    }
    let cur2=dummyhead
    for(let i=0;i<back-1;i++){
        cur2=cur2.next
    }
    cur2.next=cur2.next.next
    return dummyhead.next
    
};

