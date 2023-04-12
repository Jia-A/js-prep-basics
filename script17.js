// Write a Program to convert Decimal to Binary.

let deci = 11

function decToBin(dec){
    let temp = dec
    let bin = []
    while(temp){
        bin.unshift(temp%2)
        temp = Math.floor(temp/2)
    }
    return bin.join("")
}
// let temp = deci
// while(temp){
//     temp = Math.floor(temp/2)
//     console.log(temp)
// }

console.log(decToBin(deci))