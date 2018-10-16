const electron = require("electron");
const path  = require("path");
const { app, BrowserWindow } = electron;
const TimerTray = require('./app/time_tray');
const MainWindow = require("./app/main_window");

let mainWindow, tray;

app.on("ready", () => {

    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
    
    const iconName = process.platform === "win32" ? "windows-icon.png" : "iconTemplate@2x.png";
    const iconPath = path.join(__dirname + `/src/assets/${iconName}`);
    tray = new TimerTray(iconPath, mainWindow);
});