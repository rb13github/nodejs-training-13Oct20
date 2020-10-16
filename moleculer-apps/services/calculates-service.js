
const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

broker.createService({
    name: 'calculate',
    actions: {
        //all biz methods goes here
        add(ctx) {
            //const name = ctx.params.name;
            const { a, b } = ctx.params;
            return a+b;
        }
    }
});

async function startApp() {
    try {
        await broker.start();
        const hello = await broker.call('calculate.add', { a: 10, b: 20 })
        console.log(hello);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();
