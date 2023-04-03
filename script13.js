// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word.

const str = "  Jiya     Agrawal is waiting for      Aaaaaashu's callllll     "

function removeSpace(inpStr) {
    let newStr = inpStr.trim().split(/\s+/).join(" ")
    return newStr
}

console.log(removeSpace(str))