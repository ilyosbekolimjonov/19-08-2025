const getDigitProduct = (n) => {
    let num = Math.abs(n)
    if (num == 0) {
        return 0
    }
    
    let product = 1
    let temp = String(num)

    for (let i = 0; i < temp.length; i++) {
        product *= parseInt(temp[i])
    }
    
    return product
}

let myNumber = 234
let product = getDigitProduct(myNumber)
alert(`Son ${myNumber} raqamlarining ko'paytmasi: ${product}`)