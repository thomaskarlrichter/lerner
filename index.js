/*jslint indent: 2, nomen: true, maxlen: 100, sloppy: true, vars: true, white: true, plusplus: true */
/*global require, */

var server = require('./server');
var router = require('./router');

server.start(router.route);
