//broker 
//ServiceBroker is  a class.
const { ServiceBroker } = require('moleculer')
const {log}= console
//create Service Broker Instance
const broker = new ServiceBroker();


function startApp() {
    //start broker engine
    log("startApp");
    broker.start();
}
startApp();