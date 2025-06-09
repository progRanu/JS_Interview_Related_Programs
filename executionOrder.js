console.log("start");

const promise = new Promise((resolve, reject) => {
  resolve("I am promise");
});

setImmediate(() => {
  console.log("I am setImmediate");
});

const timer = setTimeout(() => {
  console.log("I am 0 ms timer");
}, 0);

promise.then(response => console.log(response));

process.nextTick(() => {
  console.log("I am process next tick");
});

console.log("end");



/**ExpectedOutput
 * ==============================
start
end
I am process next tick
I am promise
I am 0 ms timer
I am setImmediate 
**/
