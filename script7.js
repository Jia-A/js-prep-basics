// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

function findMin(...args){
    let min = args[0];
    for(let i = 1; i<args.length; i++){
        if(args[i]<min){
            min=args[i]
        }
    }
    return min

}

console.log(findMin(5,7,8,1))