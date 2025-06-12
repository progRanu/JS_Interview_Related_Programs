/** 
 * Write a function named flipObject that receives an Object
 *  describing people and their jobs and returns a new object
 *  with the jobs as keys, and names as values.
 */
const people = {
  bob: "JS Developer",
  alice: "AI Engineer",
  jon: "JS Developer",
  nick: "UX Designer",
};

function flipObject(people) {
    let flipobject = {};
    for(let key in people){
         let job = people[key];
          if (flipobject.hasOwnProperty(job)) {
      flipobject[job].push(key);
    } else {
      // If it's the first time, initialize with an array containing the name
      flipobject[job] = [key];
    }
        
    }
    return flipobject;
}


console.log(flipObject(people));