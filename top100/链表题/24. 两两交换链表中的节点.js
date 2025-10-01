var swapPairs = function (head) {
  const dummyHead = new ListNode(0, head);
  let cur = dummyHead;

  while (cur.next && cur.next.next) {
    let first = dummyHead.next;
    let second = dummyHead.next.next;
    first.next=second.next
    second.next=first
    cur.next=second
    cur=first
  }
  return dummyHead.next
};
