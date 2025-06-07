let input= ['name', 'address', 'city', 'state', 'pin']
	
//let	Output= [pin, city, name, state, address]
	
let outPutArray=[];	
	function sortAddress(){
	   for (let i = 0; i < input.length - 1; i++) {
  for (let j = 0; j < input.length - 1 - i; j++) {
    let a = input[j];
    let b = input[j + 1];

    // Compare by length first
    if (a.length > b.length || 
       (a.length === b.length && a > b)) {
      // Swap
      let temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
    }
  }
}
	 }
		
	sortAddress();
	console.log(input) 