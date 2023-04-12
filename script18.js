// Write a Program to Print N Odd Number in Descending Order.

function oddNum(num){
    for(let i = num ; i>0 ; i--){
        let newOdd = i*2 -1
        console.log(newOdd)
    }
}

oddNum(5)