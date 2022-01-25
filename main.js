const { app, BrowserWindow } = require('electron')

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        backgroundColor: '#ffff00'
    })

    // If we ever want a second window this is how you render another window
    // const secWindow = new BrowserWindow({
    //     width: 600,
    //     height: 400,
    // })

    mainWindow.loadFile('index.html')

    // secWindow.loadURL('https://www.labjack.com/')

    // Delays the app window display until all elements are rendered
    // the "once" ensures it only executes once
    mainWindow.once('ready-to-show', mainWindow.show)
}

app.whenReady().then(createWindow)

// Quits the application when all windows are closed. 
// On macOS it is common for applications and 
// their menu bar to stay active until 
// the user quits explicitly with CMD+Q.
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

// Various actions can trigger this event, 
// such as launching the application for the first time, 
// attempting to re-launch the application when it’s already running, 
// or clicking on the application’s dock (macOS) or taskbar icon.
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
