class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size=0
  }
  addTohead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next = node;
    this.tail.prev = node;
  }
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  moveToHead(node) {
    this.removeNode(node);
    this.addTohead(node);
  }
  removeTail(){
     const tailNode=this.tail.prev
     this.removeNode(tailNode)
     return tailNode
  }
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    } else {
      const node = this.cache.get(key);
      const value = node.value;
      moveToHead(node);
      return value;
    }
  }
  put(key, value) {
    if (this.cache.has(key)) {
      const newNode = this.cache.get(key);
      newNode.value = value;
      //将当前位置的节点去除并且移动到头部
      this.moveToHead(newNode);
    }else{
        const newNode=new ListNode(key,value)
        this.cache.set(key,newNode)
        this.addTohead(newNode)
        this.size++
        if(this.size>this.capacity){
           const tailNode= this.removeTail()
           this.cache.delete(tailNode.key)
           this.size--
        }
    }
  }
}
