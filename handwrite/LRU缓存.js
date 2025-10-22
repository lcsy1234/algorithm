// 思路：要put与get数字，返回的值是val，
// 所以就是
class Node{
   constructor(key,value){
     this.key=key
    this.value=value
    this.next=null
    this.prev=null
   }
}
class LRUcache{
    constructor(capacity){
        this.capacity=capacity
        this.size=0
        this.cache=new Map()

        this.head=null;;
        this.tail=null
        this.head.next=this.tail
        this.tail.prev=this.head
    }
    addToHead(node){
        node.next=this.head.next
        node.prev=this.head
        this.head.next.prev=node
        this.head.next=node
    }
    removeNode(node){
        node.prev.next=node.next
        node.next.prev=node.prev
    }
    moveToHead(node){
        removeNode()
        this.addToHead()
    }
    get(key){
        if(!this.cache.has(key)){
            retunrn-1
        }
        const node=this.cache.get(key)
        moveToHead(node)
        return node
    }
    removeTail(){
       const node=this.tail.prev
       this.removeNode(node)
       return node.key
    }
    put(key,value){
        if(this.cache.get(key)){
            const node=this.cache.get(key)
            node.value=value
            this.moveToHead()
        }else{
            const newNode=Node(key,value)
            this.cache.set(key,newNode)
            this.size++
            this.moveToHead(newNode)
            if(this.size>this.capacity){
               const tailkey= removeTail()
                this.cache.delete(tailkey)
                this.size--
            }
        }
    }
}