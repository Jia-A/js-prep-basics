// Write a JavaScript program that reverses a number.
let num = 12345

function revNum(nums){
    let newNum = String(nums).split("")
    let x = newNum.reverse().join("")
    return x
}

console.log(revNum(num))