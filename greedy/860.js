/**
 * @param {number[]} bills
 * @return {boolean}
 */
//贪心算法，到20的时候只有两种解题思路
var lemonadeChange = function (bills) {
    const changes = new Map([[5, 0],[10,0]])

    for (let i = 0; i < bills.length; i++) {
        const curCustom = bills[i]
        switch (curCustom) {
            case 5:
                changes.set(5, changes.get(5) + 1)
                break
            case 10:
                if (changes.get(5) >= 1) {
                    changes.set(5, changes.get(5) - 1)
                    changes.set(10, changes.get(10)+1)
                } else {
                    return false
                }
                break
            case 20:
                if ((changes.get(5) >= 1 && changes.get(10)>0)) {
                    changes.set(5, changes.get(5) - 1)
                     changes.set(10, changes.get(10)-1)
                } else if (changes.get(5) >= 3){
                     changes.set(5, changes.get(5) - 3)
                }else{
                    return false
                }
                break
        }
    }
    return true
};
