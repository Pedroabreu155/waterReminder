const { app, Menu } = require('electron')
const controlWindow = require('./ControlWindow.js')


function App(){
  Menu.setApplicationMenu(null)
  const win = require('./startWindow.js')
  const tray = require('./Tray.js')
  const { toggle } = controlWindow(win, tray)



  tray.on('click', toggle)
  
}


app.whenReady().then(App)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
