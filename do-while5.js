function fibonacciSequence() {
    let N = +prompt("butun son kiriting:")
    
    if (isNaN(N) || N < 0) {
        alert("Noto'g'ri qiymat, musbat butun son kiriting.")
        return
    }

    let a = 0
    let b = 1
    let result = ""

    if (N >= 0) result += a

    if (N >= 1) result += " " + b

    if (N > 1) {
        do {
            let next = a + b
            if (next > N) {
                break
            }
            result += " " + next
            a = b
            b = next
        } while (true)
    }

    alert(`Fibonachchi ketma-ketligi (${N} gacha): ${result}`)
}

fibonacciSequence()