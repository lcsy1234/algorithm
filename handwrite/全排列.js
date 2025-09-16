//全排列 回溯法
const permute = function (nums) {
  const result = [];
  const backtrack = (path, options) => {
    // 一个增加值，一个减少值
    if (options.length === 0) {
      result.push(path);
      return;
    }
    for (let i = 0; i < options.length; i++) {
      backtrack(
        path.concat(options[i]),
        options.slice(0, i).concat(options.slice(i + 1))
      );
    }
  };
  backtrack([], nums);
  //   return result.map((item) => item.join(''))//这个是处理字符串
  return result;//这个是处理数字
};
// console.log(permute([1, 2, 3]));
console.log(permute("abc"));
