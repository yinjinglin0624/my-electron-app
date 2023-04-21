const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    // 实例化BrowserWindow
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    })
    ipcMain.handle('ping', () => 'pong')
    window.loadFile('index.html')
    window.webContents.openDevTools()
}
//  当 Electron 完成初始化后调用
// app.on('ready',()=> { createWindow() })
app.whenReady().then(()=> {
    // 即使没有打开任何窗口，macOS 应用通常也会继续运行。
    //在没有窗口可用时,调用 app打开一个新窗口。
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
    })
    createWindow() 
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })