/*jslint indent: 2, nomen: true, maxlen: 100, sloppy: true, vars: true, white: true, plusplus: true */
/*global require, console, exports */

function route(pathname, method){
  "use strict";
  console.log("my route: " +  pathname + " Method: " + method);
  if(pathname === "/start"){
    console.log("==> start executed");
  } else if(pathname === "/upload") {
    console.log("==> upload executed");
  } else {
    console.log("==> 404");
  }
}

exports.route = route;
