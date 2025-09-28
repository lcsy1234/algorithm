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
var getIntersectionNode = function (headA, headB) {
  // 边界处理：如果任一链表为空，直接返回null
  if (!headA || !headB) return null;
  // 1. 计算两个链表的长度
  let lenA = 0,
    lenB = 0;
  let currA = headA,
    currB = headB;
  // 计算链表A的长度
  while (currA) {
    lenA++;
    currA = currA.next;
  }
  // 计算链表B的长度
  while (currB) {
    lenB++;
    currB = currB.next;
  }
  // 2. 让较长的链表先移动差值步，使两链表剩余长度相同
  currA = headA;
  currB = headB;
  // 如果A更长，A先移动
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      currA = currA.next;
    }
  }
  // 如果B更长，B先移动
  else {
    for (let i = 0; i < lenB - lenA; i++) {
      currB = currB.next;
    }
  }
  // 3. 同时移动两个指针，直到找到相交节点或遍历结束
  while (currA && currB) {
    // 找到相交节点（引用相同）
    if (currA === currB) {
      return currA;
    }
    currA = currA.next;
    currB = currB.next;
  }

  // 没有相交节点
  return null;
};
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let lenA = 0;
  let lenB = 0;
  let curA = headA;
  let curB = headB;
  //计算链表长度
  while (curA) {
    lenA++;
    curA = curA.next;
  }
  while (curB) {
    lenB++;
    curB = curB.next;
  }
  // 2. 让较长的链表先移动差值步，使两链表剩余长度相同
  curA = headA;
  curB = headB;
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      curA = curA.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      curB = curB.next;
    }
  }
  while (curA && curB) {
    if (curA === curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }
  return null;
};
