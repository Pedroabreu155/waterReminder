const Timer = {

    time: 25 * 60,
    currentTime: 0,

    init(){
        Timer.currentTime = Timer.time
        console.log(Timer.currentTime)
    },

    countdown(){}

}

export { Timer }
