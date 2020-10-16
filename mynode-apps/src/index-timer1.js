//non blocking programming ; using timer

function blockMe(message){
    console.log(message)
}

function delay(handler) {
    setTimeout(handler, 1000)
    console.log('after timeout')
}
//as we are using nonblocking the below method will call immediatly after delay
blockMe('start')
delay(function () {
    //code will be called after timeout event is triggered by kernel.
    console.log('i am delayed message')
})
blockMe('end')