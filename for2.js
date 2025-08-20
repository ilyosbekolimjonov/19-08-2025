function findSquareNumbers() {
    let N = +prompt("son kiriting:")
    
    if (isNaN(N) || N < 1) {
        alert("Noto'g'ri qiymat, butun son kiriting")
        return
    }

    let squareNumbers = []

    for (let i = 1; i * i <= N; i++)
        squareNumbers.push(i * i)
    
    alert(`1 dan ${N} gacha bo'lgan mukammal kvadrat sonlar: ${squareNumbers.join(", ")}`)
}

findSquareNumbers()