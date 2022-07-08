const mysql = require('mysql2-promise')();
//or  const mysql = require('mysql');
mysql.configure({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "roma_bd"
});

module.exports= mysql;


