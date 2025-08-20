const checkPassword = function(password) {
    if (password.length >= 8) {
        return "Yaroqli parol"
    } else {
        return "Yaroqsiz parol"
    }
}

let userPassword = "abcd1234"
let passwordStatus = checkPassword(userPassword)
alert(`"${userPassword}" paroli: ${passwordStatus}`)

let shortPassword = "123"
let shortPasswordStatus = checkPassword(shortPassword)
alert(`"${shortPassword}" paroli: ${shortPasswordStatus}`)