const isPerfectNumber = (n) => {
    if (n <= 1) {
        return false
    }
    
    let sumOfDivisors = 1
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            sumOfDivisors += i
            if (i * i !== n) {
                sumOfDivisors += n / i
            }
        }
    }
    
    return sumOfDivisors == n
}

let num1 = 28
let result1 = isPerfectNumber(num1)
alert(`Son ${num1} mukammal son: ${result1}`)

let num2 = 10
let result2 = isPerfectNumber(num2)
alert(`Son ${num2} mukammal son: ${result2}`)