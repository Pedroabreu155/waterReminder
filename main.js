const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')


function createWindow () {
    
  Menu.setApplicationMenu(null)

  const win = new BrowserWindow({
    width: 400,
    height: 400,
    resizable: false
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
