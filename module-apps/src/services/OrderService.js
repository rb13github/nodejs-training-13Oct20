const ORDERS = require('../mock-data/Orders')
//use of commonjs
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
