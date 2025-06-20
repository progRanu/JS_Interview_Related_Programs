const arr = [10, 5, 20, 89,8, 20,23,90];

function secondMax(arr){
    let output;
    let max = arr[0];
        let secondmax = arr[0];
    for( let index =0; index< arr.length; index++){
        
       for(let j = index + 1; j< arr.length; j++){
          if(arr[j]> max ){
              secondmax = max;
              max = arr[j];
              output = secondmax;
              
          }else if(arr[j] > secondmax && arr[j] < max) {
            secondmax = arr[j];
              output = secondmax;
          } 
       }
    }
    console.log(output);
}

secondMax(arr)