function checkDigitSum(n) {
    let num = Math.abs(n)
    let sum = 0
    let temp = String(num)

    for (let i = 0; i < temp.length; i++) {
        sum += parseInt(temp[i])
    }
    
    if (sum < 10) {
        return "kichik"
    } 
    else if (sum >= 10 && sum <= 20) {
        return "o'rtacha"
    } 
    else {
        return "katta"
    }
}

let myNumber = 583
let evaluation = checkDigitSum(myNumber)
alert(`Son (${myNumber}) raqamlari yig'indisi bo'yicha bahosi: "${evaluation}"`)

let anotherNumber = 12
let evaluation2 = checkDigitSum(anotherNumber)
alert(`Son (${anotherNumber}) raqamlari yig'indisi bo'yicha bahosi: "${evaluation2}"`)