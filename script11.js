// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string.

function replaceChar(str, repChar, repWith){
    let arrStr = str.split("")
    for(let i = 0; i<arrStr.length; i++){
        if(arrStr[i] === repChar){
            arrStr[i] = repWith
        }
    // console.log(arrStr)
    }
    return arrStr.join("")
}

console.log(replaceChar("jeeeeya", "e", "i"))