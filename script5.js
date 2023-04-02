// Given an array and two numbers, your function should replace all entries of the first number in an array with the second number.
const arr = [1,2,3,4,3,2,4,3]

function replaceAll(repNum, repWith, array){
    for(let i = 0; i<array.length; i++){
        if(array[i]===repNum){
            array[i] = repWith
        }
    }
    return array
}

console.log(replaceAll(3,2,arr))