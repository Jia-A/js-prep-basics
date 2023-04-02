// Given a sentence, your function should reverse the order of characters in each word, keeping the same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
let sentence = 'we are neoGrammers'

function reverseCharactersOfWord(sen){
    let splitSen = sen.trim().split(/\s+/)
    let splitArr = []
    for(let i =0; i<splitSen.length; i++){
        let splitWord = splitSen[i].split('')
        let revWord = splitWord.reverse().join('')

        // console.log(revWord)
        splitArr.push(revWord)
    }
    return splitArr.join(" ")
}

console.log(reverseCharactersOfWord(sentence))