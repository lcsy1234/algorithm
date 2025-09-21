/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2];
  console.log("%c Line:8 🌶 arr", "color:#b03734", arr);
  const n = arr.length;
  arr.sort((a, b) => a - b);
  if (n % 2 === 0) {
    console.log(
      "%c Line:13 🍖 (arr[n/2]+arr[n/2-1])/2",
      "color:#ed9ec7",
      (arr[n / 2] + arr[n / 2 - 1]) / 2
    );

    return (arr[n / 2] + arr[n / 2 - 1]) / 2;
  } else {
    const zhongWeiNum = Math.floor(n / 2);
    return arr[zhongWeiNum];
  }
};
findMedianSortedArrays([1,2],[3,4])
