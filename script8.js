// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

function mergeArray(arr1, arr2){
    let newArr = []
    for (let i =0; i<arr1.length;i++){
        newArr.push(arr1[i])
    }
    for (let i =0; i<arr2.length;i++){
        newArr.push(arr2[i])
    }
    return newArr

}

// function mergeArray(arr1, arr2){
//     let newArr = [...arr1, ...arr2]
//     return newArr
// }

console.log(mergeArray([1,2,3,4], [6,7,8,9]))