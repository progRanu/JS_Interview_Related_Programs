console.log(undefined == null)//true
console.log(undefined === null)//false
var x = 3;
var y = '3';
console.log(x+y);//33
const arr = [1,2,3];
arr.push(4);
console.log(arr);//[1,2,3,4]
const arr1 = [1,2,3];
arr1[0]++;
console.log(arr1);//[2,2,3]

//Cannot reassign
//===============================
// const a =4;
// a=a+1;
// console.log(a);//Error