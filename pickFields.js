/**Write a function named pickFields that receives 2 parameters:
an object - data
an Array of strings - fields
The function should return a new object that contains all properties of data whose name is present in the fields array.
**/
data = { color: "blue", name: "Earth", solarSistem: "Milky Way" };
fields = ["name", "color"];

function pickFields(data, fields) {
  let obj = {};
  for (let index = 0; index < fields.length; index++) {
    for (let key in data) {
      if (fields[index] == key) {
        obj[fields[index]] = data[key];
      }
    }
  }

  return obj;
}
console.log(pickFields(data, fields));
