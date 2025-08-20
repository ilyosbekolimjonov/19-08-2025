function findMaxDigit(){
    let num = +prompt("son kiriting:")
    
    if (isNaN(num) || num === null){
        return alert("Noto'g'ri qiymat, butun son kiriting.")
    }
    
    if (num < 0) num *= -1
    let maxDigit = 0

    if (num === 0)
        maxDigit = 0
    else{
        while (num > 0){
            let digit = num % 10
            if (digit > maxDigit){
                maxDigit = digit
            }
            num = Math.floor(num / 10)
        }
    }
    
    alert(`Kiritilgan sonning eng katta raqami: ${maxDigit}`)
}

findMaxDigit()