// Given an array of numbers, your function should return an array in the ascending order.
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const  arr = [100,83,32,9,45,61] 

function sortArray(array){
    for (let i = 0; i<array.length; i++){
        for(let j=0; j<array.length-i-1 ;j++){
            if(array[j]>array[j+1]){
                let x;
                x=array[j]
                array[j]=array[j+1]
                array[j+1]=x
            }
        }
    }
    return array
}

console.log(sortArray(arr))