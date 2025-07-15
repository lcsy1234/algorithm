/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const n = gas.length
    let start = 0
    let totalRun = 0
    let curRun = 0
    for (let i = 0; i < n; i++) {
        //累积totalRun看是否能达到
        totalRun += gas[i] - cost[i]
        //记录当前起始点的剩余油量，如上一个加完油到这里所需要消耗的,因为上一站点加油有剩下的
        curRun += gas[i] - cost[i]
        if (curRun < 0) {
            start = i + 1
            curRun = 0
        }

    }
    return totalTank >= 0 ? start : -1;
};