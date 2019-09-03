// sb time ko 0 sy strt krna hoga.
var h1 = document.querySelector("h1 time"),
    seconds = 0, minutes = 0, hours = 0,
    isRunningTime = false,
    t;

// function jis ma time ma number chlygy.
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    h1.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}  

// function timer(){
        t = setInterval(add, 1000);
// }
// timer();
/* Start button */
function timerStart(){
    if(isRunningTime === false){
        // setInterval(timer, 1000);
        isRunningTime = true;
    }
}
/* Stop button */
function myStopbtn(){
    clearInterval(t);
}

/* Clear button */
function reStart(){
     h1.innerHTML = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}