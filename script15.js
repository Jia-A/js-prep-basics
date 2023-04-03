// Given a string, determine if it is a palindrome, considering only alphanumeric characters

const str = "aabbaa"

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

console.log(palindromeStr(str))