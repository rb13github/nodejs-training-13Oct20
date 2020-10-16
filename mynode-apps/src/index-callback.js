//infinite timer; heart beat 
const { log } = console;
const heartBeat = callbackhandler => {
    const timerId = setInterval(callbackhandler, 1000, new Date());
    //stopping the timer
    setTimeout(() => {
        clearInterval(timerId)
    }, 10000);
}
///the value is passed in hearbeat method as function parameter
heartBeat(date => log(date))