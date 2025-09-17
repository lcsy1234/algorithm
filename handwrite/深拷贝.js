const deepClone=function(obj, hash = new WeakMap()) {
  // 1. 处理 null 和 非对象类型
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 2. 处理 Date 对象
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // 3. 处理 RegExp 对象
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 4. 防止循环引用
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // 5. 创建新对象或数组
  const cloneObj = Array.isArray(obj) ? [] : {};

  // 将新对象存入 hash，防止循环引用
  hash.set(obj, cloneObj);

  // 6. 深拷贝属性
  Reflect.ownKeys(obj).forEach(key => {
    cloneObj[key] = deepClone(obj[key], hash);  // 递归拷贝
  });

  return cloneObj;
}
//思路：首先处理null和非对象类型，然后处理特殊对象Date和RegExp，
//接着使用WeakMap防止循环引用，创建新对象或数组，最后递归深拷贝属性。   