const fs = require('fs');
const direct='./test_malware';
let md5 = require("./js/md5")
let malware = null;
let wmcf = null;
let wmcd = null;
let isinfected = null;
const nodedir = require('node-dir');
fs.readFile('./malware_list.txt', 'utf8', function(err, malw) {
 malware = malw.split('\n');
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
