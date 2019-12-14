var mysql = require('mysql');
var inq = require('inquirer');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "pwdb",
    database: "topten",
    port: 3306
  });