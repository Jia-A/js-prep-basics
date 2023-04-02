// Write a program that takes two strings and copies smaller strings into a bigger string.

function copyStr(str1, str2){
    if(str1.length>str2.length){
        str1 = str1+ str2
        return str1
    }
    else{
        str2 = str2 + str1
        return str2
    }   
}

console.log(copyStr("jiya", "aashu"))