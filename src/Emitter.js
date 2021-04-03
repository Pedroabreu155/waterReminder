const Emitter = {
    events:{},

    on(event, cb){
        // igual a Emitter.events.click
        Emitter.events[event] = Emitter.events[event] || []
        Emitter.events[event].push(cb)
    },

    emit(event){

        if(event in Emitter.events === false){
            return;
        }

        Emitter.events[event].forEach((e) => {
            e()
        })
    }
}

Emitter.on('click', () => console.log('cliquei'))

Emitter.emit('click')


export { Emitter }