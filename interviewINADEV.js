var arr = [2,5,2,2,4,5];
//var output = [2,5,2,4,5];

let duplicateNumber = [];
function duplicateElement(){
    
    for( let index =0; index<= arr.length-1; index++){
        let numberToFind = arr[index];
        let count =0;
        for(let j=0; j<=arr.length-1; j++){
            if(numberToFind === arr[j]){
               count++;
               if(count >1){
                  if(!duplicateNumber.includes(numberToFind)){
                      duplicateNumber.push(numberToFind);
                  } 
                   
               }
               //Deleting the 2nd Count
               if(count >2){
                   arr.splice(arr[j],1) ;
                   console.log(arr)
               }
                
            }
        }
    }
    
}
duplicateElement();
console.log(duplicateNumber);
//console.log(duplicateNumber.includes(2))
//splice --(index,deletecount)




console.log("Try programiz.pro");

const x = { foo: 1 };
const y = { foo: 2 }; 
function addFoo(obj) {   
return obj.foo + 1; 
} 
console.log(addFoo(x));
console.log(addFoo(y));



let x = 1;
 
if (function f() {}) {
  x += typeof f;
}
 
console.log(x);





let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };
newObj.age =70; 
console.log(obj.age);
console.log(newObj.age);