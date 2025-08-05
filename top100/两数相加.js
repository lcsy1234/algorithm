/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 思路：
//先讲当前的节点相加，赋值给新的链表，新的链表的都的初始化
//如果为空，就将他初始化为sum%10，并且他的移动当前位置，如果不为空，就直接将这个值赋值为sum，并且移动当前位置，当前的值.val=
//移动l的位置，如果l有next就移动l


var addTwoNumbers = function(l1, l2) {
    let carry=0
    const dummy=new ListNode(0)
    let  cur=dummy
//l1 l2还有下一位，最后进了一位三种情况
    while(l1||l2 ||carry >0){
        let val1=l1?l1.val:0//l1长度已经截止的时候就为0
        let val2=l2?l2.val:0
        let sum=val1+val2+carry
        carry=Math.floor(sum/10)
        cur.next=new ListNode(sum%10)//创建节点
        cur=cur.next//移动位置
        //l1比l2长的时候就移动l1
        if(l1){
            l1=l1.next
        }
        if(l2){
            l2=l2.next
        }
    }
    return dummy.next
};