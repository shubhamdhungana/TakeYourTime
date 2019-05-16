
//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }


document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds;
}

window.setInterval(stopWatch, 1000);
