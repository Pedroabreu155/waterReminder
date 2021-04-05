

function ControlWindow(win, tray){


    function toggle(){
        if(win.isVisible()){
            win.hide()
        } else{
            show()
        }
    }


    function show(){
        // get win and tray position
        const {x, y} = getPosition()

        // update the positions
        win.setPosition(x, y, false)

        //show window
        win.show()

        //then win.focus()
        win.focus()
    }


    function getPosition(){
        const winBounds = win.getBounds()
        const trayBounds = tray.getBounds()

        const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
        const y = Math.round(trayBounds.height + 300)

        return {x, y}
    }


    return {
        toggle
    }
}

module.exports = ControlWindow

//passando por referencia pra depois passar parametros



