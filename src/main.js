const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready',_ =>{
    new BrowserWindow({
        height: 400,
        width: 400
    });
});