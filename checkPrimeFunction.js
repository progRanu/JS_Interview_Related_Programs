function checkPrime(x){
    let divisor = 2;
    while(x>divisor){
        if(x % divisor == 0){
     return console.log('Not Prime'); 
    }
    else
      divisor++;
  }
  return console.log('Prime'); 
    }

checkPrime(6);


//More Optimized Way
function isPrimeNumberCheck(n){
const sqrt = Math.sqrt(n);
console.log(sqrt);
    if(n<=1) return false;
    if(n===2) return true;
     if (n % 2 === 0) return false;
     
     for(let index =3; index<sqrt; index+=2){
          if (n % index === 0) return console.log('Not Prime');
         
     }
      return console.log('Prime');
}

isPrimeNumberCheck(789)