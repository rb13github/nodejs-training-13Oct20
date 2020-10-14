//way-1
function sayHello(name = 'foo') {
    console.log('hello', name);
    return 'welcome'
}
//function is assigned to a variable
let hello = sayHello;
console.log(hello('ram'));

//way -2 ;anonymous function

let hai = function(name = 'foo') {
    console.log('hai', name);
};
hai();

console.log(typeof hai)
console.log(typeof hello)