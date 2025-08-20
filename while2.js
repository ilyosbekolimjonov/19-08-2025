function decimalToBinary() {
    let num = +prompt("son kiriting:")
    
    if (isNaN(num) || num === null || num < 0) {
        return alert("Noto'g'ri qiymat, son kiriting.")
    }

    let binary = ""

    if (num === 0) {
        binary = "0"
    } else {
        while (num > 0) {
            binary = (num % 2) + binary
            num = Math.floor(num / 2)
        }
    }

    alert(`Kiritilgan son ikkilik sanoq sistemasida: ${binary}`)
}

decimalToBinary()