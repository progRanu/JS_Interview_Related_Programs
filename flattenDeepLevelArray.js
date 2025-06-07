const nestedArray = [1,[2,[3,[4,[5,[6,7],8],9],10],11],12];
//Flatten array
//Array.isArray()

  let flattenArray=[];
function flattenArrayFunction(nestedArray){
  
    for( let index =0; index<= nestedArray.length; index++ ){
    if( typeof(nestedArray[index])==='object' ){
        flattenArrayFunction(nestedArray[index]);
    }else if(typeof(nestedArray[index]) === 'number') {
        flattenArray.push(nestedArray[index])
    }
    
}

}
flattenArrayFunction(nestedArray);
console.log(flattenArray)