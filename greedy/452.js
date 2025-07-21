/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[1]-b[1])
    console.log("%c Line:7 🍑 points", "color:#93c0a4", points);
    let border=points[0][1]
    let res=1
    for(let i=1;i<points.length;i++){
        const curUpBorder=points[i][0]
        if(curUpBorder>border){
            res++
            border=points[i][1]
        }
    }
    return res
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));

