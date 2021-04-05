const { BrowserWindow } = require('electron')

function createWindow () {

    const win = new BrowserWindow({
      width: 350,
      height: 300,
      resizable: false,
      show: false,
      frame: false      
    })
  
    win.loadFile('index.html')


    //window blur
    win.on('blur', () => win.hide)

    return win
  }

module.exports = createWindow()