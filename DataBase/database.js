const mysql = require('mysql2');

// const config = {
//     host: "localhost",
//     user: "root",
//     password: "AvishayDEV19",
//     port: 3306,
// }

// -------------- Variables --------------
let databaseConnection;
let config;

// -------------- Help Functions --------------

function testConnection(){
    return databaseConnection ?
        {success:"Database Connected"} :
        {error: `There is no database connection. please make sure to call 'createConnection' function.`};
    
}

function customQuery(query, feilds = [], message = "Query Run Successfully."){
    const error = testConnection();
    if (error.error) return error;

    return new Promise((resolve) => {
        databaseConnection.query(query, feilds,
        (err, result) => {
            if (err) return resolve({error: err.message});
            console.log(message)
            resolve(result);
        });
    });
}

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
    const {success} = testConnection();
    if (success) return {error:"Database Already Connected! please call 'disconnect' function, before creating new connection."}

    config = {
        ...configOptions,
        host: configOptions.host || 'localhost',
        user: configOptions.user || "root",
        port: configOptions.port || 3306,
    }
    databaseConnection = mysql.createConnection(config);
    
    return new Promise((resolve) => {
       databaseConnection.connect((err)=>{
           if(err) return resolve({error: err.message});
           console.log("Connected To The Database.");
           return resolve({success:"Connected To The Database."});
       });
    });
}

function disconnect(){
    const error = testConnection();
    if (error.error) return error;

    return new Promise((resolve) =>{
        databaseConnection.end((err)=>{
            if (err) return resolve({error:err.message});
            console.log("Disconnected From The Database.");
            databaseConnection = undefined;
            return resolve({success:"Disconnected From The Database."});
        });
    });
}

// -------------- Database --------------

async function createDatabase(name,toConnect = true){
    let error = testConnection();
    if (error.error) return error;

    error = await customQuery(`CREATE DATABASE ${name}`);
    if (error.error) return error;

    if (!toConnect) return {success:"Database Created."};

    config.database = name;
    await disconnect();
    await connect(config);

    return {success:"Database Created and Reconnected."};
}

async function deleteDatabase(name){
    let error = testConnection();
    if (error.error) return error;

    error = await customQuery(`DROP DATABASE ${name}`);
    if (error.error) return error;

    delete config.database;
    await disconnect();
    await connect(config);

    return {success:"Database Deleted and Reconnected."};
}

//-------------- Table --------------

function createTable(tableName,columns){
    const columnsString = Object.entries(columns).map(([key,value])=> `${key} ${value}`);
    return customQuery(`CREATE TABLE ${tableName} (${columnsString.join(', ')})`);
}

function deleteTable(tableName){
    return customQuery(`DROP TABLE IF EXISTS ${tableName}`);
}

// -------------- Modifies --------------

async function addColumn(tableName, column, values){
    const columnNameValue = Object.entries(column);

    // Create the ALTER TABLE query to add the new column
    const alterTableQuery = `ALTER TABLE ${tableName} ADD COLUMN ${columnNameValue[0]} ${columnNameValue[1]}`;

    // Execute the ALTER TABLE query to add the new column
    let error = await customQuery(alterTableQuery);
    if (error.error) return error;

    // Loop through the values and insert them into the table
    values.forEach(async (value, index) => {
        const insertQuery = `UPDATE ${tableName} SET ${columnNameValue[0]} = ? WHERE id = ?`;
        error = await customQuery(insertQuery, [value, index + 1]);
        if (error.error) return error;
    });

    return {success:"Column Insert Successfully."};
}

function removeColumn(tableName,columnName){
    return customQuery(`ALTER TABLE ${tableName} DROP COLUMN ${columnName}`);
}

function modifyColumn(tableName, columnName, signs){
    const query = `ALTER TABLE ${tableName} MODIFY ${columnName} ${signs.join(' ')}`;
    return customQuery(query);
}

function addForeignKey(constraint_name, tableName, ColumnName,foreignTableName,foreignColumnName){
    const query = `ALTER TABLE ${tableName} ADD CONSTRAINT ${constraint_name} FOREIGN KEY (${ColumnName}) REFERENCES ${foreignTableName} (${foreignColumnName})`;
    return customQuery(query);
}

function removeForeignKey(constraint_name, tableName){
    const query = `ALTER TABLE ${tableName} DROP FOREIGN KEY ${constraint_name}`;
    return customQuery(query);
}

function insertToTable(tableName, instances){
    const exampleInstance = instances[0];

    const columns = `(${Object.keys(exampleInstance).join(', ')})`;
    const values = instances.map((instance)=> Object.values(instance));
    
    const query = `INSERT INTO ${tableName} ${columns} VALUES ?`;
    return customQuery(query,values);
}

function removeFromTable(tableName, identifiers){
    const identifiersString = Object.entries(identifiers).map(([key,value])=>`${key} = ${value}`).join(' AND ');
    
    const query = `DELETE FROM ${tableName} WHERE ${identifiersString}`;
    return customQuery(query);
}

function updateTable(tableName, identifiers, instances){
    const identifiersString = identifiers.map((id)=> `${id} = ?`).join(' AND ');

    instances.forEach((instance)=>{
        let error = customQuery(`UPDATE ${tableName} SET ? WHERE ${identifiersString}`, [instance]+identifiers.map((id)=>instance[id]));
        if (error.error) return error;
    });

    return {success:"All The Instances Successfully Updated"};
}

// -------------- Queries --------------

function getTable(tableName, columnNames = [], rowsIndexes = []){
    const columnsString = columnNames.length > 0 ? `(${columnNames.join(', ')})` : '*'
    const limitString = rowsIndexes.length > 0 ? ` LIMIT ${rowsIndexes.join(', ')}` : ''
    
    const query = `SELECT ${columnsString} FROM ${tableName}` + limitString;
    return customQuery(query);
}

function getTableWhere(tableName, identifiers, columnNames = [], rowsIndexes = []){
    const identifiersString = Object.entries(identifiers).map(([key,value])=>`${key} = ${value}`).join(' AND ');
    const columnsString = columnNames.length > 0 ? `(${columnNames.join(', ')})` : '*';
    const limitString = rowsIndexes.length > 0 ? ` LIMIT ${rowsIndexes.join(', ')}` : '';

    const query = `SELECT ${columnsString} FROM ${tableName} WHERE ${identifiersString}` + limitString;
    return customQuery(query);
}

// -------------- Tests --------------

module.exports = {
    connect,
    disconnect,
    customQuery,
    createDatabase,
    deleteDatabase,
    createTable,
    deleteTable,
    addColumn,
    removeColumn,
    modifyColumn,
    addForeignKey,
    removeForeignKey,
    getTable,
    insertToTable,
    removeFromTable,
    updateTable,
    getTableWhere,
    mysql
}