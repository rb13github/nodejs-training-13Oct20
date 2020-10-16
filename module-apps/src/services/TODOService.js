//use of commonjs

const TODOSLIST = require('../mock-data/TODOSLIST')

const todo = require('../mock-data/TODO')
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
        return TODOSLIST;
    }
    add( todoObject)
    {


    }

    update( todoObject)
    {


    }

    save( todoObject)
    {


    }

    remove( todoObject)
    {


    }


}

module.exports = TODOService;
