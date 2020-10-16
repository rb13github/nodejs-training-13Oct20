
const { ServiceBroker } = require('moleculer');
const { log } = console;

//const broker = new ServiceBroker();

// const broker = new ServiceBroker({
//     transporter: "nats://localhost:4444"
// });


const broker = new ServiceBroker({
    transporter: "nats://localhost:4444",
    registry: {
        discoverer: "redis://localhost:6379"
    }
});
//publisher service
broker.createService({
    name: 'publisher',
    actions: {
        add: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                return a + b;
            }
        }
    }
})

async function init() {
    try {
        await broker.start();
        broker.repl();
    }
    catch (e) {
        log(e);
    }
}
init();