// Write a JavaScript program to compute the sum of all digits that occur in a given string.

let str = "1234"
let sum=0

function addStr(inpStr){
    let strArr = inpStr.split("")
    for(let i=0; i< strArr.length;i++){
        sum = sum + Number(strArr[i])
    }
    return sum
}

console.log(addStr(str))