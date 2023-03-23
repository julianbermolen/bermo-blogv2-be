const mysql = require('mysql');

/*let conexion = {
    host: "localhost",
    user: "root",
    password:"",
    database:"bermo_blog"
}*/
let conexion = {
    connectionLimit:3,
    host: "sql629.main-hosting.eu",
    user:"u478915781_julianbermolen",
    password:"Julian123!",
    database:"u478915781_julianbermolen"
}

var con = mysql.createPool(conexion);

module.exports = con;