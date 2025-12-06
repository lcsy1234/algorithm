// 思路：两数相加
function addTwoNumbers(l1,l2){
    const dummyHead=new ListNode(0)
    let cur=dummyHead
    let carry=0
    while(l1||l2||carry){
        const val1=l1?l1.val:0
        const val2=l2?l2.val:0
        const sum=val1+val2+carry
        const val=sum%10
        carry=Math.floor(sum/10)
        cur.next=new ListNode(val)
        cur=cur.next
        if(l1!==null) {
            l1=l1.next
        }
        if(l2!==null){
            l2=l2.next
        }
    }
    return dummyHead.next
}