// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var http = require('http'),
    fs = require('fs');
var request = require('request');

fs.readFile('../archives/sites.txt', function (err, html) {
  if (err) {
    throw err;
  }
  var str = html.toString();
  var urlTextArray = str.split('\n');
  var found = false;
  var sitesArray = fs.readdirSync('../archives/sites');

  for(var i = 0; i < urlTextArray.length; i++){
    //var site = 'http://' + urlArray[i];
    for(var j = 0; j < sitesArray.length; j++){
      if(sitesArray[j] === urlTextArray[i]){
        found = true;
        console.log(found);
        break;
      }
    }
    if(!found){
      console.log(found);
    }
  }

  // request('http://www.google.com', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     //console.log(body) // Print the google web page.
  //   }
  // });
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    //response.write(html);
    response.end();
  }).listen(8000);
});
