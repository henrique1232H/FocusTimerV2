import { takeQuerySelector } from "./takeQuery.js";
import changeControlsMusic from "./changeControlsMusic.js";
import { minutes, interval, count } from "./count.js";


const takeQuery = takeQuerySelector();
console.log(takeQuery)


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


changeControls()
changeControlsMusic();
