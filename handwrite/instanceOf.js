function myInstanceof(left, right) {
  if (typeof right !== "function") {
    throw new TypeError("Right-hand side of instanceof is not an object");
  }
  if (left === null || typeof left !== "object") {
    return false;
  }
  let currentProto = Object.getPrototypeOf(left); // 获取当前对象的原型
  while (currentProto !== null) {
    if (currentProto === right.prototype) {
      return true;
    }
    currentProto = Object.getPrototypeOf(currentProto);
  }

  return false;
}
function myInstanceof(left, right) {
  if (typeof right !== "function") {
    return new TypeError("右边不是一个对象");
  }
  if (left === null || typeof left !== "object") {
    return false;
  }
  let currentProto = Object.getPrototypeOf(left);
  while (currentProto !== null) {
    if (currentProto === right.prototype) {
      return true;
    }
    currentProto = Object.getPrototypeOf(currentProto);
  }
}
