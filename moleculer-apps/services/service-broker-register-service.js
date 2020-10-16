//broker 
//ServiceBroker is  a class.
const { ServiceBroker } = require('moleculer')
const {log}= console
//create Service Broker Instance
const broker = new ServiceBroker();

//create a service,by passing a literal object, which is called service scheam
//service schema defines service charactertics , having biz method....
broker.createService({
    name: 'hello',
    actions: {
        //all biz methods goes here
        sayHello() {
            return 'Hello,Moleculer Service!!!';
        }
    }
});



function startApp() {
    //start broker engine
    log("startApp");
    broker.start();
}
startApp();