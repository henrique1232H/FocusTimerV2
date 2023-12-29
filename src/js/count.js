let seconds = 0;
let minutes = 0;
let interval;

import { takeQuerySelector } from "./takeQuery.js";

const takeQuery = takeQuerySelector()

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

export {minutes, interval, count}