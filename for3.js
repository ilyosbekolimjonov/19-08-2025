function sumMultiples(){
    let N = +prompt("son kiriting")
    
    if (isNaN(N) || N < 1){
        alert("Noto'g'ri qiymat kiritildi. Musbat butun son kiriting")
        return
    }

    let sum = 0
    let multiples = []

    for (let i = 1; i <= N; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i
            multiples.push(i)
        }
    }
    
    alert(`1 dan ${N} gacha 3 va 5 ga bo'linadigan sonlar yig'indisi: ${sum}\n(${multiples.join("+")}=${sum})`)
}

sumMultiples()