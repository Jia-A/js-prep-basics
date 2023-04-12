// Given a string, determine if it is a palindrome, considering only alphanumeric characters

const str = "aabbba"

// function palindromeStr(inpStr){
//     let j=1, isPalin = ""
//     for(let i=0; i<inpStr.length/2;i++){
//         let start=inpStr[i], end=inpStr[inpStr.length-j]
//         if(start === end){
//             j++
//             if(i==j){
//                 break
//             }
//         }
//         else{
//             break
//             isPalin = false
//         }
//         // isPalin =  true
//     }
// return isPalin
// }

function palindromeStr(inpStr){
    let i=0, j=inpStr.length-1
    while(i<j){
        if(inpStr[i++] !== inpStr[j--]){
            return false
        }
    }
    return true
}

console.log("Given string is a : ", palindromeStr(str))