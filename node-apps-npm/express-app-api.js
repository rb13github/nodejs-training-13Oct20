const { response } = require('express');
const express = require('express');
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
app.get('/api/message/hai', (request, response) => {
    response.end('Hi')
});
app.get('/api/message/hello', (request, response) => {
    response.end('Hello')
});
app.get('/api/message/hello/:name', (request, response) => {
    response.end('Hello - name ')
});
app.post('/api/message/hello', (request, response) => {
    response.end('Hello -POST')
});
app.put('/api/message/hello', (request, response) => {
    response.end('Hello -PUT')
});
app.delete('/api/message/hello', (request, response) => {
    response.end('Hello -DELETE')
});
//start server
app.listen(port, () => {
    log('Express server is running @', port);
});