const { app, Menu } = require('electron')


function App(){
  Menu.setApplicationMenu(null)
  const { win } = require('./startWindow.js')
  const Tray = require('./Tray.js')

  
}


app.whenReady().then(App)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
