

mock-data/Orders.js

const ORDERS = [
    {
        id: 1,
        value: 100

    },
    {
        id: 2,
        value: 1600

    },
    {
        id: 3,
        value: 700

    }
];
module.exports = ORDERS;

services/OrderService.js
const ORDERS = require('../mock-data/Orders')

/**
 * function require(fileName){
 *  let exports = {};
 *  let module.exports;
 * 
 *  if(module.exports){
 * 
 *    return code
 *  }
 * 
 *   return exports
 * 
 * 
 * }
 */


class OrderService {
    constructor(){
        console.log('order service is called!!!')
    }
    findAll(){
        return ORDERS;
    }
}

module.exports = OrderService;

index.js
const OrderService = require('./services/OrderService');

////////////////////////////////////////////////
const service = new OrderService();
const { findAll } = new OrderService();


function startApp() {
    findAllProducts();
}
startApp();

function findAllProducts() {
    //console.log(service.findAll())
    console.log(findAll())
}