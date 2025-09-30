/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 创建虚拟头节点，简化结果链表的构建
  const dummy = new ListNode(0);
  let curr = dummy;
  // 进位值，初始为0
  let carry = 0;

  // 遍历两个链表，直到所有节点处理完毕且无进位
  while (l1 || l2 || carry) {
    // 获取当前节点的值（若节点为空则取0）
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // 计算当前位的总和（包含进位）
    const sum = val1 + val2 + carry;
    // 计算当前位的结果（对10取余）
    const currentVal = sum % 10;
    // 更新进位（对10取整）
    carry = Math.floor(sum / 10);

    // 创建新节点并拼接到结果链表
    curr.next = new ListNode(currentVal);
    curr = curr.next;

    // 移动链表指针（若存在下一个节点）
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // 返回结果链表的头节点（虚拟头节点的下一个节点）
  return dummy.next;
};
// 思路是只要有链表兵器有近位可以继续遍历，如果
var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    const carrentValue = sum % 10;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(carrentValue);
    current = current.next;
    // 移动链表指针（若存在下一个节点）
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return dummyHead.next;
};
