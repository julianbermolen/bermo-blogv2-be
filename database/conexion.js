const mysql = require('mysql');

/*let conexion = {
    host: "localhost",
    user: "root",
    password:"",
    database:"bermo_blog"
}*/
let conexion = {
    connectionLimit:3,
    host: "julianbermolen.com",
    user:"u130197610_julianbermolen",
    password:"Julian123!",
    database:"u130197610_julianbermolen"
}

var con = mysql.createPool(conexion);

module.exports = con;