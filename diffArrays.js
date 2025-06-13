const numbers1 = [11,96,103,-5,0,12,1];
const numbers2 = [0,1,2,3,4,5];
const output = [11,96,103,-5,12,2,3,4,5];
function diffArrays(numbers1, numbers2) {
let diffarray= [];
    for(let index=0; index<numbers1.length; index++){
        let matchingNum1 = numbers1[index];
             if((!numbers2.includes(matchingNum1))){
                 diffarray.push(matchingNum1);
               //   diffarray.push(matchingNum2);
             }
         
    }
    for(let index=0; index<numbers2.length; index++){
          let matchingNum1 = numbers2[index];
             if((!numbers1.includes(matchingNum1))){
                 diffarray.push(matchingNum1);
               //   diffarray.push(matchingNum2);
             }    
    }
    
    return diffarray;

 
}

console.log(diffArrays(numbers1,numbers2))
