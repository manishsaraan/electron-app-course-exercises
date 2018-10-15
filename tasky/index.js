const electron = require("electron");
const path  = require("path");
const { app, BrowserWindow } = electron;
const TimerTray = require('./app/time_tray');

let mainWindow, tray;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        height: 470,
        width: 300,
        frame: false,
        resizable: false,
        show: false,
    });

    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
    mainWindow.on("blur", () =>  mainWindow.hide());
    
    const iconName = process.platform === "win32" ? "windows-icon.png" : "iconTemplate@2x.png";
    const iconPath = path.join(__dirname + `/src/assets/${iconName}`);
    tray = new TimerTray(iconPath, mainWindow);
});