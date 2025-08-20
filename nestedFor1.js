function pascalTriangle(){
    let N = +prompt("Paskal uchburchagi qatorlari sonini:")
    
    if (isNaN(N) || N < 0){
        alert("Noto'g'ri qiymat, butun son kiriting.")
        return
    }

    let output = ""
    let line = []
    
    for (let i = 0; i < N; i++){
        let temp = []
        let row = ""
        for (let j = 0; j <= i; j++){
            if (j == 0 || j == i)
                temp.push(1)
            else
                temp.push(line[j - 1] + line[j])

            row += temp[j] + " "
        }
        output += row.trim() + "\n"
        line = temp
    }
    
    alert("Paskal uchburchagi:\n" + output)
}

pascalTriangle()