/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 步骤1：用快慢指针判断是否有环，若有环则记录相遇节点
  let slow = head;
  let fast = head;
  let hasCycle = false;

  while (fast && fast.next) {
    slow = slow.next; // 慢指针走1步
    fast = fast.next.next; // 快指针走2步

    if (slow === fast) {
      // 相遇，说明有环
      hasCycle = true;
      break;
    }
  }

  // 无环则返回null
  if (!hasCycle) {
    return null;
  }

  // 步骤2：找到环的入口节点
  // 数学推导：头节点到入口的距离 = 相遇点到入口的距离（绕环一圈内）
  let ptr1 = head; // 指针1从头节点出发
  let ptr2 = slow; // 指针2从相遇点出发
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next; // 两指针每次都走1步
    ptr2 = ptr2.next;
  }

  // 相遇时即为环的入口
  return ptr1;
};
//
var detectCycle = function (head) {
  let hasCycle = false;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }
  // 无环则返回null
  if (!hasCycle) {
    return null;
  }
  let prt1 = head;
  let prt2 = slow;
  while (prt1 !== prt2) {
    prt1 = prt1.next;
    prt2 = prt2.next;
  }
  return prt1;
};
