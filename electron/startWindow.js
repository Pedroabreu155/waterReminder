const { BrowserWindow } = require('electron')

function createWindow () {

    const win = new BrowserWindow({
      width: 350,
      height: 300,
      resizable: false,
      show: false,
      frame: false,      
    })
  
    win.loadFile('index.html')

    return win
  }

module.exports = createWindow()