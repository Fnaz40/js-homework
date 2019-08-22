// // function bany gy strt stop or reset.
// var minuts = 0;
// var seconds = 0;
// var milliseconds = 0;
// function timerStart(){
//     if(seconds === 59){
//        myStrt === minuts === 1; minuts++
//     }else{
//         minuts === 0;
//     }
// }
// function myStopbtn(){
//     clearInterval(myStrt)
// }
// var myStrt = setInterval(timerStart, 1000);




var h1 = document.querySelector("h1 time"),
    seconds = 0, minutes = 0, hours = 0,
    t;

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
    h1.innerHTML = hours + ":" + minutes + ":" + seconds;
}  

function timer(){
    t = setInterval(add, 1000);
}
timer();
/* Start button */
function timerStart(){
    setInterval(timer, 1000);
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