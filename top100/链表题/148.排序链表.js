/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
12345;
mid = 3;
left = 1;
rightHead = 4;
2;
rightHead = 3;
1;
rightHead = 2;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 问题是链表进行排序
// 思路：分为两部分l1与l2用快慢指针找到中间节点，
//然后两部分各自进行排序，归并排序
//
var sortList = function (head) {
    if (!head || !head.next) return head;
    const mid = findMid(head);
    const rightHead = mid.next;
    mid.next = null;
    const left = sortList(head);
    const right = sortList(rightHead);
    return merge(left, right);
};
 function findMid(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  //左节点大于右边
  function merge(left, right) {
    // 虚拟头节点，简化合并逻辑
    const dummy = new ListNode(0);
    let curr = dummy;
    while (left && right) {
      if (left.val < right.val) {
        curr.next = left;
        left = left.next;
      } else {
        curr.next = right;
        right = right.next;
      }
      curr = curr.next;
    }
    curr.next = left || right;
    return dummy.next;
  }
