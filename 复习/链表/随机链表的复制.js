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
    curr.next = left|| right;
    return dummy.next;
  }
  //递归是每次的递归函数return之后回到上一层的状态再一次执行下面的内容，走到return，
// 思路：递归思路是都归到单个节点，所以每两个单独左右节点进行对比