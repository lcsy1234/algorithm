for (let i = 1; i <= 9; i++) {
    let rawStr = ''
    for (let j=1; j<= i; j++) {
        rawStr += `${j}*${i}=${i * j} `


    }
    console.log(rawStr)
}