/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let thisHead = head
    while (thisHead && thisHead === val) {
        thisHead = thisHead.next
    }
    let cur = thisHead
    while (head && cur.next) {
        if (cur.next.val === val) {
            cur = cur.next.next
        } else {
            cur = cur.next
        }
    }


    return thisHead
};
//解法二
var removeElements = function (head, val) {
    let dummyHead = new ListNode(0, head)
    let cur = dummyHead
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return dummyHead.next
};
