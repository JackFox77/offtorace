import { AppState } from "./appstate.js";

console.log(AppState)



function _drawRacers(){
    console.log("hello")
    let racers = AppState.racers
    let Template = ''
    racers.forEach(racer => Template += racer.Template)
    console.log(Template)
    document.getElementById('racer').innerHTML= Template
}

_drawRacers()

class Controller{
    constructor() {
        console.log('constructor')
        _drawRacers()
        setInterval()
    }
}