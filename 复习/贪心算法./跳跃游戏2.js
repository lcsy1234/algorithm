var line = read_line().trim().split(' ').map(Number);
const nums = line;
const n = nums.length;

// 边界情况：数组长度为1，无需跳跃
if (n === 1) {
    console.log(0);
    process.exit();
}

let jumps = 0;
let currentEnd = 0;
let nextFarthest = 0;

for (let i = 0; i < n - 1; i++) {
    // 更新下一次能跳到的最远位置
    nextFarthest = Math.max(nextFarthest, i + nums[i]);
    // 到达当前跳跃的边界，必须跳一次
    if (i === currentEnd) {
        jumps++;
        currentEnd = nextFarthest;
        // 提前退出：当前边界已覆盖终点
        if (currentEnd >= n - 1) {
            break;
        }
    }
}

console.log(jumps);