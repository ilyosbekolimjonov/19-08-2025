function findPrimeNumbers(){
    let num = +prompt("son kiriting (1 dan katta):")
    
    if (isNaN(num) || num === null ||  num < 2){
        return alert("Noto'g'ri qiymat, 2 yoki undan katta butun son kiriting.")   
    }

    let limit = num
    let primeNumbers = []
    let currentNumber = 2 

    function isPrime(num){
        if (num <= 1) return false
        let i = 2
        while (i * i <= num){
            if (num % i == 0){
                return false
            }
            i++
        }
        return true
    }

    while (currentNumber <= limit){
        if (isPrime(currentNumber)){
            primeNumbers.push(currentNumber)
        }
        currentNumber++
    }

    alert(`1 dan ${limit} gacha bo'lgan tub sonlar: ${primeNumbers.join(", ")}`)
}

findPrimeNumbers()