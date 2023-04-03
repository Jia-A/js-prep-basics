// Write a program that masks all but the last four characters of the string "5565534276455423" to '#'

let str = "5565534276455423"

function maskStr(inpStr){
    let cloneStr = inpStr
    let fourLetters = cloneStr.slice(-4)
    console.log(fourLetters)
    let newStr = ""
    for(let i=0;i<inpStr.length-4;i++){
        newStr = newStr+"#"
    }
    return newStr+fourLetters
    
}

console.log(maskStr(str))