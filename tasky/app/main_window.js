const electron = require("electron");
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(filePath){
      super({
        height: 470,
        width: 300,
        frame: false,
        resizable: false,
        show: false,
        webPreferences: { backgroundThrottling: false },
    });
    this.on("blur", this.onBlur.bind(this));
    this.loadURL(filePath);
  }

  onBlur(){
    this.hide();
  }
}

module.exports = MainWindow;