const util = require('./util.js')
const mysql = require('mysql2');


// const config = {
//     host: "localhost",
//     user: "root",
//     password: "AvishayDEV19",
//     port: 3306,
// }


// -------------- Setup --------------

/**
 * this function takes config object, 
 * and connect to the database.
 * Please make sure to send your password.
 * Please specify the database name to connect it.
 * Necessary fields: 
 * - `name` (string) - The name of the database connection.
 * - `host` (string) - The host URL (default: localhost).
 * - `user` (string) - The MySQL username (default: root).
 * - `password` (string) - The MySQL password (default: undefined).
 * - `port` (number) - The connection port (default: 3306).
 * - `database` (string) - The database name (default: undefined).
 * @param {object} configOptions 
 * @param {Function} callback calls after the connection is active.
 * @returns {object} Success will return empty object, Fail will return object with error feild.
 */
function connect(configOptions){
    const {success} = util.testConnection();
    if (success) return {error:"Database Already Connected! please call 'disconnect' function, before creating new connection."}

    util.setConfig( {
        ...configOptions,
        host: configOptions.host || 'localhost',
        user: configOptions.user || "root",
        port: configOptions.port || 3306,
    });
    util.setDatabaseConnection( mysql.createConnection(util.getConfig()));
    
    return new Promise((resolve) => {
        util.getDatabaseConnection().connect((err)=>{
           if(err) return resolve({error: err.message});
           console.log("Connected To The Database.");
           return resolve({success:"Connected To The Database."});
       });
    });
}

function disconnect(){
    const error = util.testConnection();
    if (error.error) return error;

    return new Promise((resolve) =>{
        util.getDatabaseConnection().end((err)=>{
            if (err) return resolve({error:err.message});
            console.log("Disconnected From The Database.");
            util.setDatabaseConnection(undefined);
            return resolve({success:"Disconnected From The Database."});
        });
    });
}

module.exports ={
    connect,
    disconnect
}