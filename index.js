const electron = require('electron');
const {app, BrowserWindow, Notification, Tray, Menu, ipcMain} = electron;

let tray = null;
let mainWindow = null;

const createMainWindow = ()=>{
    mainWindow = new BrowserWindow({
        with: 800,
        height: 600,
        // show: false, systray
        
        //Expose Nodejs in the browser using contextBridge + ipc
        // webPreferences:{
        //     preload: `${__dirname}/preload.js`
        // }
    });
    mainWindow.loadURL(`http://localhost:3000`);
}

app.whenReady().then(()=>{
    createMainWindow();


    //SYS TRAY
    // tray = new Tray(`${__dirname}/iconTemplate.png`);
    // const contextMenu = Menu.buildFromTemplate([
    // //   { label: 'Item1', type: 'radio' },
    // //   { label: 'Item2', type: 'radio' },
    // //   { label: 'Item3', type: 'radio', checked: true },
    // //   { label: 'Item4', type: 'radio' }
    // { label: 'Item1'},
    // { label: 'Item2'},
    // { label: 'Item3'},
    // { label: 'Item4', click: ()=>{
    //     createMainWindow();
    //     mainWindow.show();
    // }}
    // ])
    // tray.setToolTip('This is my application.')
    // tray.setContextMenu(contextMenu)

    //NOTIFICATION
    // const notification = new Notification({ 
    //     title: 'Custom Notification',
    //     subtitle: 'Subtitle of the Notification'
    // });
    // notification.show();


    //backgroundThrottling GOTCHA:
    // tray = new Tray(`${__dirname}/iconTemplate.png`);
    // const contextMenu = Menu.buildFromTemplate([
    //     { label: 'open window', click: ()=>{
    //         mainWindow.show();
    //     }}
    // ])
    // tray.setContextMenu(contextMenu)
    //backgroundThrottling GOTCHA:
    // mainWindow.on('close', (e)=>{
    //     e.preventDefault();
    //     mainWindow.hide();
    // })
})

//systray + backgroundThrottling GOTCHA
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') app.quit()
// })


// //ipc
// ipcMain.on('asynchronous-message', (event, arg) => {
//     console.log(arg);
//     //shortcut
//     event.reply("asynchronous-reply","pong");
//     //specific window
//     mainWindow.webContents.send("asynchronous-reply","pong");
// })




