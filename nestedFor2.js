function multiplicationTable() {
    let output = ""
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            output += `${i} x ${j} = ${i * j}\n`
        }
        output += "\n"
    }
    
    console.log("Ko'paytirish jadvali:\n" + output)
}

multiplicationTable()