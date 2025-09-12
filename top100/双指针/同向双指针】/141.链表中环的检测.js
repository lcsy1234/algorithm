//链表中环的检测（LeetCode 141）
// 思路：
// 慢指针 slow 每次走 1 步，快指针 fast 每次走 2 步。
// 若链表有环，快指针最终会追上慢指针（套圈）；若无环，快指针会先到达终点。
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // 相遇则有环
  }
  return false;
}