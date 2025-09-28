function addQueryParams(url, params) {
  // 过滤值为null/undefined的参数
  const validParams = Object.entries(params).filter(
    ([_, value]) => value !== null && value !== undefined
  );
  if (validParams.length === 0) return url;

  // 拼接参数键值对（注意编码）
  const queryString = validParams
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  // 判断URL中是否已有?
  return url.includes("?") ? `${url}&${queryString}` : `${url}?${queryString}`;
}
//手写拼接
function addQueryParams(url, params) {
  const newParams = Object.entries(params).filter(
    ([_, value]) => value !== null && value !== undefined
  );
  if (newParams.length === 0) return url;
  const queryString = newParams
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  return url.includes("?") ? `${url}&${queryString}` : `${url}?${queryString}`;
}
