function checkStrLength(str) {
    if (str.length % 2 == 0) {
        return "Juft uzunlik"
    }
    else {
        return "Toq uzunlik"
    }
}

let myString = "hello"
let result = checkStrLength(myString)
alert(`"${myString}" satri "${result}"ga ega`)

let anotherString = "world!"
let result2 = checkStrLength(anotherString)
alert(`"${anotherString}" satri "${result2}"ga ega`)