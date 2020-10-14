

///version1 without => and after this the version2 below is with =>
function resolve1 (username,pwd)  {
    if(username=="abc" && pwd=="123") 
    console.log("resolve1 success ");
}
function reject1 (username,pwd) {
    if(username!="abc" && pwd!="123") 
    console.log("reject1 faild ");
 }
function login1(resolve,reject)
{
    console.log("login1 started");

}
 login1(resolve1("abc","123"),reject1("zyz","456"));
     
console.log("login version 1 1s complete");

//////////////////////

//////version 2 with =>

//defining a function
function loginv2(resolve2,reject2)

{
   resolve2("abc","123");
   reject2("abc","123");
    console.log(" in loginv2");
}

//calling a funciton
  loginv2(
    (username,pwd) =>{
    if(username=="abc" && pwd=="123") 
    console.log("in resolve2 success ");
    },
   (username,pwd)=> {
    if(username!="abc" && pwd!="123") 
    console.log("reject2 faild ");
    }
    );
 
 

// ///defining with => 
// resolve2=(username,pwd)=>{
//     if(username=="abc" && pwd=="123") 
//     console.log("in resolve2 success ")
// }
// ///defining with =>
// reject2= (username,pwd)=> {
//     if(username!="abc" && pwd!="123") 
//     console.log("reject2 faild ");
//  }


 loginv2(("abc","123"),("zyz","456"));

 console.log("login version 2 1s complete");


