/*jslint indent: 2, nomen: true, maxlen: 100, sloppy: true, vars: true, white: true, plusplus: true */
/*global require, console, exports */

var http = require("http");

function start() {
  "use strict";
  function onRequest(request, response){
    if (request.url.match(/ico/)){
      console.log("queries ico");
      return;
    }
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Lerner');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started');

}

exports.start = start;