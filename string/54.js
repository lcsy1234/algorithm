function institute(s) {
    let arr=Array.from(s)
    for (let i = 0; i < arr.length; i++) {
    
        if (isNumberString(arr[i])) {
            arr[i]= 'number'
        }
    }
    console.log(arr.join(''))
    return arr.join('')
}
const isNumberString = (str) => {return /^[-+]?(\d+(\.\d*)?|\.\d+)$/.test(str)};
institute('a1b2c3')