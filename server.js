/*jslint indent: 2, nomen: true, maxlen: 100, sloppy: true, vars: true, white: true, plusplus: true */
/*global require, console, exports */

var http = require("http");
var url = require("url");

function start(route) {
  "use strict";
  function onRequest(request, response){
    var mypath;
    try {
      mypath = url.parse(request.url).pathname;
    } catch (error) {
      console.log(error);
    }
    if (mypath.match(/ico/)){
      console.log("queries ico");
      return;
    }
    route(mypath, request.method);
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Lerner with router\n');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started');

}

exports.start = start;