const findLongestWord = (sentence) => {
    let words = sentence.split(" ")
    let longestWord = ""

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    
    return longestWord
}

let mySentence = "Men JavaScriptni o'rganayapman"
let longest = findLongestWord(mySentence)
alert(`Berilgan gapdagi eng uzun so'z: "${longest}"`)