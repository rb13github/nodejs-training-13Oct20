const { response } = require('express');
const express = require('express');
const { chunk } = require('lodash');
const { log } = console;
const port = 3000;
//create application object
const app = express();

//application object is container object
/**
 * 1. help to register routes-end point points
 * 2. help to start server
 * 3. global settings for application
 */

//REST End points.
//HTTP -GET request
app.get('/', (request, response) => {
    response.end('Home')
});

//////////////////////////////////////////////////////
app.get('/api/todos/list', (request, response) => {
    response.end('TODOS -list')
});
app.post('/api/todos/create', (request, response) => {
    response.end('todos-post')
});
//start server
app.listen(port, () => {
    log('Express server is running @', port);
});