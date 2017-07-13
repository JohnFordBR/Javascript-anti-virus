'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', ()=>{
   const mainWindow = new BrowserWindow({
        height: 600,
        width: 600
    });
  mainWindow.loadURL('file://' + __dirname + 'index.html');
});
