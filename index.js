'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcRenderer = require('electron').ipcRenderer;
let smth = true;
let mainWindow= null;
app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        height:625,
        width:1200
    });
     mainWindow.loadURL('file://' + __dirname + '/index.html');
const code = `const button = document.getElementById('secbut');
              const fs = require('fs');
              const direct='./test_malware';
              let md5 = require("./js/md5")
              let malware = null;
              let wmcf = null;
              let wmcd = null;
              let isinfected = null;
              const nodedir = require('node-dir');
              button.addEventListener('click', function() {
                fs.readFile('./malware_list.txt', 'utf8', function(err, malw) {
                 malware = malw.split('\\n');
                return malware;
                });

                nodedir.paths(direct, function(err, files) {
                  for(let i of files.files){//

                    for(let q of malware){
                      if(md5(i)==q){isinfected=true;console.log('malware' + ' ' + i);wmcf=true; break;}else if(i==files.files[files.files.length-1]&&q==malware[malware.length-1]){if(wmcf!=true){isinfected=false;wmcf=false;console.log('easy');}}
                    }
                  }//
                  for(let a of files.dirs){//
                    for(let b of malware){
                      if(md5(a)==b){isinfected=true; console.log('malware' + ' ' + a);wmcd=true; break;}else if(a==files.dirs[files.dirs.length-1]&&b==malware[malware.length-1]){if(wmcd!=true){isinfected=false;wmcd=false;console.log('easy');}}
                    }
                  }//
                 console.log(isinfected);
                });

              });`;
     mainWindow.webContents.executeJavaScript(code);
// setInterval(function(){ mainWindow.webContents.executeJavaScript(` document.getElementsByClassName('button')[0].addEventListener('click', function(){console.log('aha')});`, function (result) {console.log(result)}); },20);

});
