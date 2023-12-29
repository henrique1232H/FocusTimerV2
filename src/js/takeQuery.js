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


export { takeQuerySelector }