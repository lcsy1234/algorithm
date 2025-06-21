/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//key value:首先我要先拿到第一个字符串中的字符串zishu来完善map，然后第二个中找到map中是否有这个值，这个值找到一个就-1,if()
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let newObject = new Map()
    for (let i = 0; i < s.length; i++) {
        newObject.set(s[i], (newObject.get(s[i]) || 0) + 1);
    }
    for (let j = 0; j < t.length; j++) {
        const count = newObject.get(t[j])
        if (!count ) return false
        newObject.set(t[j], count-1)
    }
    return true
};
isAnagram('aacc','ccac')