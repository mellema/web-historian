var path = require('path');
var http = require('http'),
    fs = require('fs');

var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var method = req.method;
  if(method === 'GET'){
    fs.readFile('./public/index.html', function (err, html) {
      if (err) {
        throw err; 
      }
      res.write(html);  
      res.end(archive.paths.list);
    });
  }
  if(method === 'POST'){
    console.log('************************** ');
    console.log("[200] " + req.method + " to " + req.url);
    var urlInput = '';
    req.on('data', function(chunk) {
      console.log("Received body data:");
      urlInput = chunk.toString();
      urlInput = urlInput.slice(4);
      console.log(urlInput);
    });
    
    req.on('end', function() {
      // empty 200 OK response for now
      fs.appendFile('../archives/sites.txt', urlInput, function (err) {
        console.log(err);
      });
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      res.end();
    });

  }
};
var http = require('http'),
    fs = require('fs');


