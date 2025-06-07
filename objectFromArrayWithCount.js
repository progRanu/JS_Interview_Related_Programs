const arr = [1, "a",  1, "b",  4, "a", "a", 37, 4];
//expected ans:  obj = { 1: 2, ‘a’: 3, ‘b’: 1, 4: 2, 37: 1 };
let obj = {};
function expectedOutput(){
for (let index =0; index < arr.length; index++){
    let matchedNum = arr[index];
    let count = 0;
    for(let j=0; j<arr.length; j++){
        if(matchedNum === arr[j]){
            count++;
            obj[matchedNum] = count;
        }
        // else{
        //     obj[matchedNum] = 1;
        // }
    }
}
console.log(obj);
}

expectedOutput();