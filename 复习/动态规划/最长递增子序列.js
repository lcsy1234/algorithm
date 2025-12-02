/**
 * 贪心+二分查找求最长递增子序列长度
 * @param {number[]} nums - 输入数组
 * @return {number} 最长递增子序列的长度
 */
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    const tails = []; // 存储长度为i+1的子序列的最小结尾元素
    for (const num of nums) {
        // 二分查找：找到tails中第一个 >= num的位置
        let left = 0, right = tails.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (tails[mid] < num) {
                left = mid + 1; // 中间元素小于num，只考虑当前元素小于末尾值的
            } else {
                right = mid; // 中间元素 >= num，向左收缩
            }
        }
        // 若找到位置，替换；否则，添加到末尾
        if (left === tails.length) {
            //只要
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    
    return tails.length; // tails的长度即为最长子序列的长度
}
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
// 思路：维护一个数组，如果大于末尾值的话push到末尾
//如果小于末尾值的话，就找到第一个比他大的值进行替换