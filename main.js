let a = [1, 2, 3];
let b = a; 
b[0] = 8; 
//console.log(a);


let obj= {a:1,b:2};
let newObj = obj;
newObj = {a:19,b:20};
//console.log(obj);

let a = [1, 2, 3];
let b = a; 
b = [4, 5, 6]; 
//console.log(a);


let obj= {a:1,b:2};
let newObj = obj;
newObj.a = 10;
//console.log(obj);


if ([]) {
  //console.log('⭐');
}
if ({}) {
  //console.log('⭐');
}
if (undefined) {
  //console.log('⭐');
}

if ([] == true) {
 //console.log("⭐");
} else {
  //console.log("😶");
}

let arr = []
//console.log(arr.valueOf() )


const obj = { a: 'JS' };
const { a, a: b, a: c } = obj;
//console.log(a, b, c);


let a = NaN;
let b = NaN;
// console.log(typeof a);
// console.log(typeof b);
// console.log(a == b); 
// console.log(a === b);







// ✅ Rule of Thumb:
// Always prefer Number.isNaN() unless you're intentionally relying on coercion




// Strict check: Returns true only if the value is actually NaN.
// No type coercion.

Number.isNaN(NaN);         // true
Number.isNaN("abc");       // false
Number.isNaN(undefined);   // false
Number.isNaN("123");       // false
Number.isNaN(123);         // false




//Loosely checks: Tries to convert the value to a number before checking.
isNaN(NaN);         // true
isNaN("abc");       // true   ← because "abc" becomes NaN when coerced
isNaN(undefined);   // true   ← coerced to NaN
isNaN("123");       // false  ← "123" becomes 123
isNaN(123);         // false



let n = "20";

// console.log(n + 1);     
// console.log(++n);       
// console.log(n++);


let a = 10;
//console.log(a);
let b = a++;
// console.log(a);
// console.log(b);
// console.log(a+b);



let name = "JS";
name[1] = "Q";
// console.log(name);
// console.log(name[0]);
// console.log(name[1]);//S
// console.log(name[2]);//undefined




let num = 1;
const sum = ++num + num++;
// console.log(num);
// console.log(sum);




const str1 = "one str"
const str2 = "one str2.gt"
const combination = !!(str1 && str2);
//console.log(combination)//true


var x = "name";
const x = 'trusted';
//console.log(x);//SyntaxError: Identifier 'x' has already been declared



function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("Mohit");     // Output 1
greet();            // Output 2
greet("");          // Output 3
greet(undefined);   // Output 4






const str = "stringprimitive";
const str2 = str.valueOf(str);
console.log(typeof str2); //string
console.log(typeof str); //string


const str = new String("Hello World");
console.log(typeof str); // Object of String
console.log(typeof str.toString()); // string




let arrayOfNumbers = [1,2,3,4];

arrayOfNumbers[10] = 10;

let one= '1';
let two = '2';
let three = '3';


console.log(one + two + three); //123

console.log(one + two - three); //9