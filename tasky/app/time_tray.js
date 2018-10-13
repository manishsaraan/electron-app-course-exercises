const electron = require("electron");
const { Tray } = electron;

class TimeTray extends Tray {
    constructor(icon, mainWindow){
        super(icon);
        this.mainWindow = mainWindow;
        this.on("click", this.onClick.bind(this));
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
    
}

module.exports = TimeTray;