

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
        win.setPosition(x, y)

        //show window
        //then win.focus()
    }


    function getPosition(){
        const winBounds = win.getBounds()
        const trayBounds = tray.getBounds()

        const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
        const y = Math.round(trayBounds.y + trayBounds.height + 3)

        return {x, y}
    }

}




