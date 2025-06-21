
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var MyLinkedList = function () {
    this.size = 0
    this.head = new ListNode(0)
};
// null
/** 
 * @param {number} index
 * @return {number}
 */
// [0,1,2,3] index=1
MyLinkedList.prototype.get = function (index) {
    let cur = this.head
    if (index < 0 || index >= this.size) return -1;

    for (let i = 0; i <= index; i++) {
        cur = cur.next
    }
    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
// [1]
MyLinkedList.prototype.addAtHead = function (val) {
    const newPot = new ListNode(val)
    newPot.next = this.head.next
    this.head.next = newPot
    this.size++

};


/** 
 * @param {number} val
 * @return {void}
 */
//[0,1]
MyLinkedList.prototype.addAtTail = function (val) {
    let cur = this.head
    const endPot = new ListNode(val)
    for (let j = 0; j < this.size; j++) {
        cur = cur.next
    }
    cur.next = endPot
    this.size++
};
// [0,1,3]

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
// [0,1,2,3]
MyLinkedList.prototype.addAtIndex = function (index, val) {
      if (index > this.size) {
        return;
    }
    index = Math.max(0, index);
    this.size++;
    let pred = this.head;
    for (let i = 0; i < index; i++) {
        pred = pred.next;
    }
    let toAdd = new ListNode(val);
    toAdd.next = pred.next;
    pred.next = toAdd;
};

// [0,1,2，3]
/** 
 * @param {number} index
 * @return {void}
 */
//[0,1,2,3]
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.size) {
        return
    }
    index = Math.max(0, index);
    let cur = this.head
    for(let k=0;k<index;k++){
        cur=cur.next
    }
    cur.next=cur.next.next
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
