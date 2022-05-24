const mysql = require('mysql');

let conexion = {
    host: "localhost",
    user: "root",
    password:"",
    database:"bermo_blog"
}
/*let conexion = {
    connectionLimit:3,
    host: "portal.wi-sim.com.ar",
    user:"Y3SJL2",
    password:"LAISNLSB4VQLX8Z",
    database:"Mikrowisp6"
}*/

var con = mysql.createPool(conexion);

module.exports = con;