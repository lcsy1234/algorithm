class ListNode{
   constructor(key,value){
    this.key=key
    this.value=value
    this.prev=null
    this.next=null
   }
}
class LRUCache{
    constructor(capacity){
        this.capacity=capacity
        this.head=new ListNode(0,0)
        this.tail=new ListNode(0,0)
        this.head.next=this.tail
        this.tail.prev=this.head
        this.cache=new Map()
        this.size=0
    }
    get(key){
        //如果没有的话就返回-1，如果有的话，返回值，并将当前值
        if(!this.cache.has(key)){
            return -1
        }else{
            const node=this.cache.get(key)
            const value=node.value
            this.moveToHead(node)
            return value
        }
    }
    put(key,value){
        //如果有的话就更新当前值并且将当前的位置放在头部
        if(this.cache.has(key)){
            const newNode=this.cache.get(key)
            newNode.value=value
            //将当前位置的节点去除并且移动到头部
            this.moveToHead(newNode)
        }else{
            //没有的话就添加这个节点,并且添加到头部，不用移出
            const newNode=new ListNode(key,value)
            this.cache.set(key,newNode)
            this.addToHead(newNode)
            this.size++
            if(this.size>this.capacity){
                //犯错的地方是我要移出的节点，然后删除这个哈希值
                const tailNode=this.removeTail() 
                this.cache.delete(tailNode.key)
                this.size--
            }
        }


    }
    addToHead(node){
        node.next=this.head.next
        node.prev=this.head
        this.head.next.prev=node
        this.head.next=node
    }
    //移出当前的节点
    moveToHead(node){
        this.removeNode(node)
        this.addToHead(node)
    }
    removeNode(node){
        node.prev.next=node.next
        node.next.prev=node.prev
    }
    removeTail(){
        const tailNode=this.tail.prev
        this.removeNode(tailNode)
        return tailNode
    }

}