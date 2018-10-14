const electron = require("electron");
const { Tray, app, Menu } = electron;

class TimeTray extends Tray {
    constructor(icon, mainWindow){
        super(icon);
        this.mainWindow = mainWindow;
        this.setToolTip("Timer App");
        this.on("click", this.onClick.bind(this));
        this.on("right-click", this.onRightClick.bind(this));
    }
    
    onClick(event, bounds){
            // click enent bounds
        const { x, y } = bounds;

        // window height and width
        const { height, width } = this.mainWindow.getBounds();

        console.log(bounds.x, bounds.y);
        if(this.mainWindow.isVisible()){
            this.mainWindow.hide();
        }else{
            this.mainWindow.setBounds({
                x: x - width / 2,
                y,
                height,
                width,
            })
            this.mainWindow.show();
        } 
    }

    onRightClick(){
        const menuConfig = Menu.buidFromTemplate([
            {
                label: "Quit",
                click: () => app.quit()
            }
        ]);

        this.popUpContextMenu(menuConfig);
    }
    
}

module.exports = TimeTray;