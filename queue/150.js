

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (operators(tokens[i])) {
            const a=stack.pop()
            const b=stack.pop()
            stack.push(computeRes(a,b,tokens[i]))
        }else{
            stack.push(parseInt(tokens[i]))
        }
    }
    return stack[0]

};
const operators = function (token) {
    return token=== '+' || token=== '-' || token=== '*' || token=== '/'
}
const computeRes=function(a,b,operator){
    switch (operator){
        case '+' : return b+a
        case '-':return b-a
        case '*':return b*a
        case '/':return Math.trunc(b / a)
        default: throw new Error('Invalid operator');
    }
}
