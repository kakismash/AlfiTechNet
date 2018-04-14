var fs  = require('fs');
var path = require('path');

//Acces to controller files
var files = fs.readdirSync(__dirname);

files.forEach(function(file){
    var fileName = path.basename(file, '.js');

    if(fileName !== 'index'){
      exports[fileName] = require('./'+ fileName);
    }
});
