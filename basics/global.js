setTimeout(() => {
    console.log('in the timeout');
    clearInterval(interval)
}, 3000);
var counter = 1;
const interval = setInterval(() => {
    console.log(counter);
    counter++;
}, 1000);
console.log(__dirname);
console.log(__filename);