function trianglePattern() {
    let N = +prompt("Uchburchak balandligini kiriting: ")

    if (isNaN(N) || N < 0) {
        alert("Noto'g'ri qiymat, butun son kiriting.")
        return
    }

    let output = ""
    for (let i = 1; i <= N; i++) {
        let row = ""
        for (let j = 0; j < i; j++) {
            row += "*"
        }
        output += row + "\n"
    }
    
    alert("Uchburchak shakli:\n" + output)
}

trianglePattern()