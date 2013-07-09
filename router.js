/*jslint indent: 2, nomen: true, maxlen: 100, sloppy: true, vars: true, white: true, plusplus: true */
/*global require, console, exports */

function route(pathname, method){
  "use strict";
  console.log("my route: " +  pathname + " Method: " + method);
}

exports.route = route;
