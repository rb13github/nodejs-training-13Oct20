const TODOService = require('./services/TODOService');

////////////////////////////////////////////////
const service = new TODOService();
const { findAll } = new TODOService();


function startApp() {
    findAllTodos();
}
startApp();

function findAllTodos() {
    //console.log(findAll())
    console.log("in findAllTodos");
    console.log(service.findAll());
}

function addtodo( todo)
{


}
function savetodo( todo)
{


}
function updatetodo( todo)
{


}
function removetodo( todo)
{


}
function savetodo( todo)
{


}

