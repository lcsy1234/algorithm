var removeNthFromEnd = function (head, n) {
  const dummyHead = new ListNode(0,head);
  let left = dummyHead;
  let right = dummyHead;
  for (let i = 0; i < n; i++) {
    right = right.next;
  }
  while (right.next !== null) {
        left = left.next;
        right = right.next;
    }
    left.next=left.next.next
    return dummyHead.next
};