const arr1 = [{name: 'abc', age: 30}, {name: 'def', age: 25}]
 
const arr2 = [{name: 'abc', dob: 30}, {name: 'xyz', dob: 25}, {name: 'def', dob: 35}]
 
const arr3 = [{name: 'abc', age: 30, dob: 30}, {name: 'def', age:25, dob: 35}]

const newArray = [...arr1, ...arr2];
//console.log(newArray);
const filteredArray = arr1.find((nameValue,index, arr2) =>{
    return nameValue.name  === arr2.name
})

console.log(filteredArray);