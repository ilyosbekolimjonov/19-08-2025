function checkDigitSumParity(){
    let n = +prompt("butun son kiriting:")
    
    if (isNaN(n)){
        alert("Noto'g'ri qiymat kiritildi.")
        return
    }

    let num = Math.abs(n)
    let sum = 0

    if (num == 0){
        sum = 0
    }
    else{
        do{
            sum += num % 10
            num = Math.floor(num / 10)
        } while (num > 0)
    }
    
    let result = (sum % 2 == 0) ? "Juft" : "Toq"
    alert(`Raqamlar yig'indisi: ${sum} \nNatija: ${result}`)
}

checkDigitSumParity()