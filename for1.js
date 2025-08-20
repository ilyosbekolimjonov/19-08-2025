function findArmstrongNumbers(){
    let N = +prompt("son kiriting:")
    
    if (isNaN(N) || N < 1){
        alert("Noto'g'ri qiymat, butun son kiriting")
        return
    }

    let armstrongNumbers = []

    for (let i = 1; i <= N; i++){
        let sum = 0
        let temp = i
        let numDigits = String(i).length

        while (temp > 0){
            let digit = temp % 10
            sum += digit ** numDigits
            temp = Math.floor(temp / 10)
        }

        if (sum == i)
            armstrongNumbers.push(i)
    }
    
    alert(`1 dan ${N} gacha bo'lgan Armstrong sonlari: ${armstrongNumbers.join(", ")}`)
}

findArmstrongNumbers()