//use of commonjs

const TODOS = require('../mock-data/TODOS')

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


class TODOService {
    constructor(){
        console.log('Todo service is called!!!')
    }
    findAll(){
        return TODOS;
    }
}

module.exports = TODOService;
