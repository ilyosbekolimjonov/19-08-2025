const isPalindrome = function(n) {
    let numStr = String(n)
    let reversedStr = numStr.split('').reverse().join('')
    return numStr == reversedStr
}

let num1 = 121
let result1 = isPalindrome(num1)
alert(`Son ${num1} palindrom: ${result1}`)

let num2 = 123
let result2 = isPalindrome(num2)
alert(`Son ${num2} palindrom: ${result2}`)