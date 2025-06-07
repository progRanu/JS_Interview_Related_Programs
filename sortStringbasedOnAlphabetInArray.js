let Input= ['name', 'address', 'city', 'state', 'pin']
	
//let	Output= [pin, city, name, state, address]
	
let outPutArray=[];	
	function sortAddress(){
	    for(let index=0; index<Input.length-1; index++ ){
	        
	        for(let j=0; j<Input.length-1-index; j++){
	            
	        if( Input[j] >  Input[j+1]){
	            let strToCompare = Input[j];
	             Input[j] = Input[j+1];
	            Input[j+1] = strToCompare;
	           
	       }
	     }
	    }
	 }
		
	sortAddress();
	console.log(Input) 