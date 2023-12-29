import { takeQuerySelector } from "./takeQuery.js";

const takeQuery = takeQuerySelector()


let seconds = 0;
let minutes = 0;
let interval;


const count = () => {
    
    interval = setInterval(() => {
        seconds++;
        
        
        if(seconds > 0 && seconds <= 9) {
            takeQuery.h1.innerHTML = `0${minutes}:0${seconds}`;
            
        }
        if(seconds >= 10){
            takeQuery.h1.innerHTML = `0${minutes}:${seconds}`
        }
        
        if(seconds >= 60) {
            seconds = 0;
            minutes++;
            
        }

        if(minutes > 9 && seconds > 0 && seconds <= 9) {
            takeQuery.h1.innerHTML = `${minutes}:0${seconds}`
        }
        
        if(minutes > 9 && seconds >= 10) {
            takeQuery.h1.innerHTML  =`${minutes}:${seconds}`
        }

    }, 1000);
    
    
}

const changeControls = () => {
    takeQuery.controls[0].addEventListener("click", () => {
        takeQuery.controls[0].classList.toggle("pauseCount");


        if(takeQuery.controls[0].classList.contains("pauseCount")) {
            pause();
        } else {
            count();
        }
    });

    takeQuery.controls[1].addEventListener("click", () => {
        takeQuery.controls[1].classList.toggle("stop");

        if(takeQuery.controls[1].classList.contains("stop")) {
            count();

        } else {
            clear();
            pause();
        }

        

    });

    takeQuery.controls[2].onclick = () => {
        minutes += 5;
    }

    takeQuery.controls[3].onclick = () => {
        minutes -= 5;

        if(minutes < 0) {
            takeQuery.controls[1].classList.remove("stop")
            clear()
            pause()
        }
    }
}

const pause = () => {
    clearInterval(interval)
}

const clear = () => {
    setTimeout(() => {
        seconds = 0;
        minutes = 0;
        takeQuery.h1.innerHTML = "00:00";

    })
}


export default changeControls
