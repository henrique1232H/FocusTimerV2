const takeQuerySelector = () => {
    const h1 = document.querySelector("h1");
    const controls = document.querySelectorAll(".controls button") 
    const body = document.querySelector("body");
    const NodelistControls = document.querySelectorAll(".controlsMusic button");
    const audioArray = document.querySelectorAll("audio");

    const audio = Array.from(audioArray)
    const controlsMusic = Array.from(NodelistControls)

    return {
        h1,
        controls,
        body,
        controlsMusic,
        audio
    }
}

const takeQuery = takeQuerySelector();


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
    }
}

const changeControlsMusic = () => {


    takeQuery.controlsMusic[0].onclick = () => {
        takeQuery.controlsMusic[0].classList.toggle("playMusic");
        takeQuery.controlsMusic[0].classList.toggle("select");
        takeQuery.controlsMusic[0].classList.toggle("forrestWhite");

        takeQuery.controlsMusic[2].classList.remove("houseWhite")
        takeQuery.controlsMusic[1].classList.remove("rainWhite");
        takeQuery.controlsMusic[3].classList.remove("fireWhite");

        let takeControlMusic0 = takeQuery.controlsMusic.shift()

        
        for(let i = 0; i < takeQuery.controlsMusic.length; i++) {
            takeQuery.controlsMusic[i].classList.remove("select");
            takeQuery.controlsMusic[i].classList.remove("playMusic")
        }

        takeQuery.controlsMusic.unshift(takeControlMusic0);
            
        if(takeQuery.controlsMusic[0].classList.contains("playMusic")) {

            takeQuery.audio[0].play();

            let takeAudio0 = takeQuery.audio.shift();

            for(let i = 0; i < takeQuery.audio.length; i++) {
                takeQuery.audio[i].pause();
            }

            takeQuery.audio.unshift(takeAudio0);

            
        } else {
            for(let i = 0; i < takeQuery.controlsMusic.length; i++) {
                takeQuery.controlsMusic[i].classList.remove("playMusic")
            }
            takeQuery.audio[0].pause();
        }

    }

    takeQuery.controlsMusic[1].onclick = () => {
        takeQuery.controlsMusic[1].classList.toggle("playMusic");
        takeQuery.controlsMusic[1].classList.toggle("select");
        takeQuery.controlsMusic[1].classList.toggle("rainWhite");

        takeQuery.controlsMusic[0].classList.remove("forrestWhite")
        takeQuery.controlsMusic[2].classList.remove("houseWhite");
        takeQuery.controlsMusic[3].classList.remove("fireWhite");

        const takeControlMusic1 = takeQuery.controlsMusic[1];
        const indice = 1
        let removeControlMusic1 = takeQuery.controlsMusic.indexOf(takeControlMusic1);

        if(removeControlMusic1 !== -1) {
            takeQuery.controlsMusic.splice(removeControlMusic1, 1)
        }

        for(let i = 0; i < takeQuery.controlsMusic.length; i++) {
            takeQuery.controlsMusic[i].classList.remove("select");
            takeQuery.controlsMusic[i].classList.remove("playMusic")
        }

        takeQuery.controlsMusic.splice(indice, 0, takeControlMusic1);

        
        if(takeQuery.controlsMusic[1].classList.contains("playMusic")) {
            takeQuery.audio[1].play();
            

            const takeAudio1 = takeQuery.audio[1];
            const removeAudio = takeQuery.audio.indexOf(takeAudio1)

            if(removeControlMusic1 !== -1) {
                takeQuery.audio.splice(removeAudio, 1)
            }

    
            for(let i = 0; i < takeQuery.audio.length; i++) {
                takeQuery.audio[i].pause();
            }

            takeQuery.audio.splice(indice, 0, takeAudio1)
            
        } else {
            for(let i = 0; i < takeQuery.controlsMusic.length; i++) {
                takeQuery.controlsMusic[i].classList.remove("playMusic")
            }

            takeQuery.audio[1].pause();
        }

      
    }

    takeQuery.controlsMusic[2].onclick = () => {
        takeQuery.controlsMusic[2].classList.toggle("playMusic");
        takeQuery.controlsMusic[2].classList.toggle("select");
        takeQuery.controlsMusic[2].classList.toggle("houseWhite");

        takeQuery.controlsMusic[0].classList.remove("forrestWhite")
        takeQuery.controlsMusic[1].classList.remove("rainWhite");
        takeQuery.controlsMusic[3].classList.remove("fireWhite");

        const takeControlMusic = takeQuery.controlsMusic[2];
        const indice = 2
        let removeControlMusic = takeQuery.controlsMusic.indexOf(takeControlMusic);

        if(removeControlMusic !== -1) {
            takeQuery.controlsMusic.splice(removeControlMusic, 1)
        }

        for(let i = 0; i < takeQuery.controlsMusic.length; i++) {
            takeQuery.controlsMusic[i].classList.remove("select");
            takeQuery.controlsMusic[i].classList.remove("playMusic")
        }

        takeQuery.controlsMusic.splice(indice, 0, takeControlMusic);
        
        if(takeQuery.controlsMusic[2].classList.contains("playMusic")) {

            if(takeQuery.audio[2].paused) {
                let teste = takeQuery.audio[2].play()
                .catch(err => {
                
                    console.log("ERRO", err)
                }).finally( () => {
                    takeQuery.audio[2].play()
                })

                console.log(teste)
            }
            

            const takeAudio = takeQuery.audio[2];
            const removeAudio = takeQuery.audio.indexOf(takeAudio)

            if(removeControlMusic !== -1) {
                takeQuery.audio.splice(removeAudio, 1)
            }

    
            for(let i = 0; i < takeQuery.audio.length; i++) {
                takeQuery.audio[i].pause();
            }

            takeQuery.audio.splice(indice, 0, takeAudio)

            
        } else {
            
            for(let i = 0; i < takeQuery.controlsMusic.length; i++) {
                takeQuery.controlsMusic[i].classList.remove("playMusic")
            }

            takeQuery.audio[2].pause();
        }
    }

    takeQuery.controlsMusic[3].onclick = () => {

        takeQuery.controlsMusic[3].classList.toggle("playMusic");
        takeQuery.controlsMusic[3].classList.toggle("select");
        takeQuery.controlsMusic[3].classList.toggle("fireWhite");

        takeQuery.controlsMusic[0].classList.remove("forrestWhite")
        takeQuery.controlsMusic[1].classList.remove("rainWhite");
        takeQuery.controlsMusic[2].classList.remove("houseWhite");

        const takeControlMusic = takeQuery.controlsMusic[3];
        const indice = 3
        let removeControlMusic = takeQuery.controlsMusic.indexOf(takeControlMusic);

        if(removeControlMusic !== -1) {
            takeQuery.controlsMusic.splice(removeControlMusic, 1)
        }

        for(let i = 0; i < takeQuery.controlsMusic.length; i++) {
            takeQuery.controlsMusic[i].classList.remove("select");
            takeQuery.controlsMusic[i].classList.remove("playMusic")
        }

        takeQuery.controlsMusic.splice(indice, 0, takeControlMusic);

        
        if(takeQuery.controlsMusic[3].classList.contains("playMusic")) {
            takeQuery.audio[3].play();

            const takeAudio = takeQuery.audio[3];
            const removeAudio = takeQuery.audio.indexOf(takeAudio)

            if(removeControlMusic !== -1) {
                takeQuery.audio.splice(removeAudio, 1)
            }

    
            for(let i = 0; i < takeQuery.audio.length; i++) {
                takeQuery.audio[i].pause();
            }

            takeQuery.audio.splice(indice, 0, takeAudio)
            
            
        } else {
            for(let i = 0; i < takeQuery.controlsMusic.length; i++) {
                takeQuery.controlsMusic[i].classList.remove("playMusic")
            }
            takeQuery.audio[3].pause();
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



changeControls();
changeControlsMusic();