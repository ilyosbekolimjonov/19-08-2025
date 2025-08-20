function findMaxOfThree(a, b, c) {
    if (a >= b && a >= c)
        return a
    else if (b >= a && b >= c)
        return b 
    else
        return c
}

let num1 = 12
let num2 = 45
let num3 = 30
let maxNum = findMaxOfThree(num1, num2, num3)
alert(`Kiritilgan sonlar (${num1}, ${num2}, ${num3}) ichida eng kattasi: ${maxNum}`)