const express = require('express');
const MessageRouter = require('./message-router');
//const TodoRouter = 
const { log } = console;
const port = 3000;
//create application object
const app = express();
//connect Routers with application object
app.use('/api/message',MessageRouter)

app.get('/', (request, response) => {
    response.end('Home')
});
//start server
app.listen(port, () => {
    log('Express server is running @', port);
});

