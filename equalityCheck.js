let a = "2" + "2"; 
let b = "22"; 
console.log(a === b);//true
console.log(typeof NaN)//number
console.log(Number.isNaN())//false
console.log(NaN ===NaN)//false
console.log(NaN == NaN)//false
console.log(typeof null)//object
console.log(null == 0)//false
console.log(null == [])//false
console.log(null == {})//false
console.log(null == false)//false
console.log(null == "")//false
console.log(null === null)//true
console.log(null == undefined)//true
console.log(null === undefined)//false
//Array equality checks
console.log([] == []);//false
console.log([] == ![]);//true
console.log([] === []);//false
console.log([] === ![]);//false
//Object equality checks
console.log({} == {});//false
console.log({} === {});//false
console.log({} == !{});//false
console.log({} === !{});//false
console.log([] == ![]);//true