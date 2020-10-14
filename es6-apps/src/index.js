function resolve (username,pwd)  {
    if(username=="abc" && pwd=="123") 
    console.log("login success ");
}

function reject (username,pwd) {
    if(username!="abc" && pwd!="123") 
    console.log("login faild ");
 }

 //login(resolve("abc","123"),reject("zyz","456"));
 
    
console.log("login complete");


