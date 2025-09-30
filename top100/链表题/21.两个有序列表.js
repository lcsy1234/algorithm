/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 创建虚拟头节点，简化头节点处理
  const dummy = new ListNode(0);
  // 当前指针，用于构建新链表
  let curr = dummy;

  // 遍历两个链表，比较节点值并拼接
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      // 拼接list1的当前节点
      curr.next = list1;
      // 移动list1指针
      list1 = list1.next;
    } else {
      // 拼接list2的当前节点
      curr.next = list2;
      // 移动list2指针
      list2 = list2.next;
    }
    // 移动当前指针
    curr = curr.next;
  }

  // 拼接剩余节点（其中一个链表已遍历完）
  curr.next = list1 || list2;

  // 返回虚拟头节点的下一个节点（新链表的头节点）
  return dummy.next;
};
//如果左边>右边，
var mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode(0);
  let cur = dummyHead;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return dummyHead.next;
};
