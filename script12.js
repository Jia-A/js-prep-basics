// Write a program that removes the time from the given date string "Wed April 15, 7 pm". It should return only the date without the time.
const date = "Wed April 15, 7 pm"

function removeTime(dataStr){
    let newDate = dataStr.split(",")
    newDate = newDate.slice(0,1).join("")
    return newDate
} 

console.log(removeTime(date))