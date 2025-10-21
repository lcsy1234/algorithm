const { Children } = require("react")

// 思路：就是根据父子节点来衔接父子关系，搭配对象来映射
  function arrayToTree(arr,rootparentId=0){
    const hashMap={}
    const len=arr.length
    for(let i=0;i<len;i++){
      hashMap[arr[i].id]={...arr[i],children:[]}
    }
    const tree=[]
    for(let i=0;i<len;i++){
      const item=arr[i]
      //当前的节点
      const curNode=nodeMap[item.id]
      const parentId=item[parentId]//当前节点的parentId，当前parentId对应的

      if(parentId===rootparentId){
        tree.push(curNode)
      }else{
        //hashMap里面试否
        const parentNode=hashMap[parentId]//这个id的孩子，就在这个id下面的chidrenpush当前的节点
        if(parentNode){//在这个hashMap里面有他的父亲节点，所以，这个对象的children就要放入当前的内容
          parentNode.children.push(curNode)
        }else{
          tree.push(curNode)
        }
      }

    }
    return tree
}