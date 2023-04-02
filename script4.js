// Given a sentence, your functions should return the number of words in the sentence.

const sentence = "Jiya Agrawal is gonna rule the IT industry one day along with Aashu"

function sentenceLength(sen){
    let count = 0
    let arrSen = sen.trim().split(/\s+/)
    for(let i=0; i<arrSen.length; i++){
        count++
    }
    return count
}

console.log(sentenceLength(sentence))