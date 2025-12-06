var mergeTwoLists = function (list1, list2) {
    const dummyHead=new ListNode(0)
    let cur=dummyHead
    while(list1&&list2){
        if(list1.val<=list2.val){
            cur.next=list1
            list1=list1.next
        }else{
            cur.next=list2
            list2=list2.next
        }
         cur = cur.next; 
    }
    cur.next=list1||list2
    return dummyHead.next
}