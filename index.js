'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow= null;
app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        height:600,
        width:1200
    });
   mainWindow.loadURL('file://' + __dirname + '/index.html');
});
