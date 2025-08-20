function countDigits(){
    let N = +prompt("son kiriting:")
    
    if (isNaN(N)){
        alert("Noto'g'ri qiymat kiritildi")
        return
    }

    let num = Math.abs(N)
    let count = 0

    if (num == 0){
        count = 1
    } else{
        do{
            count++
            num = Math.floor(num / 10)
        } while (num > 0)
    }
    
    alert(`Raqamlar soni: ${count}`)
}

countDigits()