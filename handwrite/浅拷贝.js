function shallowCopy(source) {
  // 1. 处理非对象类型（基本类型直接返回）
  if (source === null || typeof source !== 'object') {
    return source;
  }
  // 2. 根据源数据类型创建新容器（对象/数组）
  const target = Array.isArray(source) ? [] : {};

  // 3. 遍历源数据的自身可枚举属性，复制到新容器
  for (const key in source) {
    // 只复制自身属性（排除原型链上的属性）
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }

  return target;
}
//思路：是首先判断一下非对象类型，如果不是对象就直接返回，
//然后创建源容器
//最后遍历元数据的自身可枚举属性，复制到新容器
