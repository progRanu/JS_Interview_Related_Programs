const numbers1 = [11,96,103,-5,0,12,1];
const numbers2 = [0,1,2,3,4,5];
const numbersArray = [...numbers1, ...numbers2]
console.log(numbersArray);

function removeDuplicate(numbersArray){
    let filteredArray =[];
    for(let index=0; index < numbersArray.length; index++){
        if(!filteredArray.includes(numbersArray[index])  ){
            filteredArray.push(numbersArray[index])
        }
    }
    return filteredArray;
}

console.log(removeDuplicate(numbersArray));