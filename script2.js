// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj){
    for(let prop in obj){
        if(typeof(obj[prop]) === "number"){
            obj[prop] = obj[prop]*2
        }
    }
    return obj
}
  
console.log(multiplyNumeric(menu));

