function wiggleMaxLength(nums) {
    const n = nums.length;
    if (n < 2) return n;
    
    let prevDiff = nums[1] - nums[0];
    let count = prevDiff!== 0? 2 : 1; // 初始长度
    
    for (let i = 2; i < n; i++) {
        const currDiff = nums[i] - nums[i-1];
        if ((currDiff > 0 && prevDiff <= 0) || (currDiff < 0 && prevDiff >= 0)) {
            count++;
            prevDiff = currDiff;
        }
    }
    
    return count;
}