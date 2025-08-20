const calculateAverage = function(arr) {
    if (arr.length == 0) return 0
    
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

let numbers = [10, 20, 30, 40]
let average = calculateAverage(numbers)
alert(`Massivdagi sonlarning o'rtacha qiymati: ${average}`)