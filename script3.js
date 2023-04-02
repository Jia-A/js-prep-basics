// Given an array, your function should return the length of the array.
var count = 0

var jiya = [1,2,3,4,5]
function arrLength(arr){
    for(let i = 0; arr[i]!==undefined ; i++){
        count++
    }
    return count
}

console.log(arrLength(jiya))