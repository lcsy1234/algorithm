function quickSort(arr) {
    const n=arr.length
    if (n<= 1) return arr;//
    const pivot =arr[Math.floor(Math.random()*n)]; // 随机元素排序标准
    const left = [];
    const right = [];
    const equal=[]
    // 分区操作
    for (let i = 0; i < n; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if(arr[i] > pivot){
            right.push(arr[i]);
        }else{
            equal.push(arr[i])
        }
    }
    // 递归排序左右两部分
    // let resArr=[...quickSort(left), pivot, ...quickSort(right)];
    // console.log([...quickSort(left), pivot, ...quickSort(right)])
    return [...quickSort(left),  ...equal, ...quickSort(right)];
}
console.log(quickSort([1,0,3,2]))
//[]
//思路：首先要找到基准值，然后将数组进行分区，左右部分，然后递归处理
//问题基准值是会变化的吗？
//分区怎么进行？
