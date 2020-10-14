console.log("hello");

//way-1
function sayHello(name = 'foo') {
    console.log('hello', name);
    return 'welcome'
}
//function is assigned to a variable
let hello = sayHello;
console.log(hello('ram'));