const obj = {
    name: "Newname",
    id:34
}

const functionValue = function addKeyValueThroughSpreadOperator(key, value){
    let newObj= {};
    newObj[key] = value;
    //obj = {...newObj};
    return newObj;
}


console.log(functionValue('email', 'test@test.com'));