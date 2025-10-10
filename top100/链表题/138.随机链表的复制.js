/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node} 复制后的新链表头节点
 */
var copyRandomList = function (head) {
  if (!head) return null; // 空链表直接返回null

  // 哈希表：key=原节点，value=对应的复制节点
  const map = new Map();
  let curr = head;

  // 第一步：遍历原链表，创建所有复制节点并存储映射关系
  while (curr) {
    map.set(curr, new Node(curr.val)); // 只初始化val，next和random暂不设置
    curr = curr.next;
  }

  // 第二步：再次遍历，设置复制节点的next和random指针
  curr = head;
  while (curr) {
    const copyNode = map.get(curr);
    // 复制节点的next = 原节点next对应的复制节点（若原next为null则为null）
    copyNode.next = map.get(curr.next) || null;
    // 复制节点的random = 原节点random对应的复制节点（若原random为null则为null）
    copyNode.random = map.get(curr.random) || null;
    curr = curr.next;
  }

  // 返回复制链表的头节点（原头节点对应的复制节点）
  return map.get(head);
};
//问题是因为每个链表节点有一个随机指针，直接复制的话有些随机指针指向的节点还没生成，所以需要先让节点都出来
//思路：用hash映射的方法，两次循环，一次生成所有节点，一次奖next和random指向
//问题为什么第一个循环不能只geival，因为复制节点的next会指向原节点的B而不是b
var copyRandomList = function (head) {
  if (!head) return null;
  const map = new Map();
  let curr = head;
  while (curr) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }
  curr = head;
  while (curr) {
    const copyNode = map.get(curr);
    copyNode.next = map.get(curr.next) || null;
    copyNode.random = map.get(curr.random) || null;
    curr = curr.next;
  }
  return map.get(head);
};
//原地插入法
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node} 复制后的新链表头节点
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // 第一步：在原链表每个节点后插入其复制节点（如原A→B→C变为A→A'→B→B'→C→C'）
    let curr = head;
    while (curr) {
        const copyNode = new Node(curr.val); // 创建复制节点
        // 插入原节点后面
        copyNode.next = curr.next;
        curr.next = copyNode;
        // 移动到下一个原节点（跳过复制节点）
        curr = copyNode.next;
    }

    // 第二步：设置复制节点的random指针
    curr = head;
    while (curr) {
        const copyNode = curr.next;
        // 原节点random的复制节点 = 原节点random的next（因为原节点后紧跟其复制节点）
        copyNode.random = curr.random ? curr.random.next : null;
        // 移动到下一个原节点
        curr = copyNode.next;
    }

    // 第三步：拆分原链表和复制链表（恢复原链表，提取复制链表）
    curr = head;
    const copyHead = head.next; // 复制链表的头节点（原头节点的复制节点）
    let copyCurr = copyHead;

    while (curr) {
        // 原节点next指向原下一个节点（跳过复制节点）
        curr.next = curr.next.next;
        // 复制节点next指向复制的下一个节点（若存在）
        copyCurr.next = copyCurr.next ? copyCurr.next.next : null;
        // 移动双指针
        curr = curr.next;
        copyCurr = copyCurr.next;
    }

    return copyHead;
};

