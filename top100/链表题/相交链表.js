/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 思路：先移动长的，在同事移动，如果相同就返回值
var getIntersectionNode = function (headA, headB) {
  if(!headA||!headB) return null
  let curA = headA;
  let curB = headB;
  let lenA = 0;
  let lenB = 0;
  while (curA) {
    lenA++;
    curA = curA.next;
  }
  while (curB) {
    lenB++;
    curB = curB.next;
  }
  curA = headA;
  curB = headB;
  if (lenB < lenA) {
    for (let i = 0; i < lenA - lenB; i++) {
      curA = curA.next;
    }
  }else{
    for (let i = 0; i < lenB - lenA; i++) {
      curB = curB.next;
    }
  }
  while(curA&&curB){
    if(curA===curB){
      return curA
    }
    curA=curA.next
    curB=curB.next
  }
  return null;
};
