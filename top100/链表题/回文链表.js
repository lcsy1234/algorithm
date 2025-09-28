/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 步骤1：将链表值存入数组
  const values = [];
  let curr = head;
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  // 步骤2：双指针判断数组是否回文
  let left = 0;
  let right = values.length - 1;
  while (left < right) {
    if (values[left] !== values[right]) {
      return false; // 不相等则不是回文
    }
    left++;
    right--;
  }
  return true; // 全部相等则是回文
};
var isPalindrome = function (head) {
  const value = [];
  let cur = head;
  while (cur) {
    value.push(cur.val);
    cur = cur.next;
  }
  let left = 0;
  let right = value.length - 1;
  while (left < right) {
    if (value[left] !== value[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true

};
