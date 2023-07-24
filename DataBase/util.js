

// -------------- Variables --------------
let databaseConnection;
let config;


// -------------- Help Functions --------------
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

function testConnection(){
    return databaseConnection ?
        {success:"Database Connected"} :
        {error: `There is no database connection. please make sure to call 'connect' function.`};
    
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

function checkForExistence(tableName,identifiers){
    const identifiersString = !isEmptyObject(identifiers) ? ' WHERE ' + Object.keys(identifiers).map((key)=>`${key} = ?`) : '';
    const query = `SELECT * FROM ${tableName}` + identifiersString;
    return customQuery(query,Object.values(identifiers))
}


module.exports = {
    setDatabaseConnection: (connection) => { databaseConnection = connection; },
    setConfig: (conf) => { config = conf; },
    updateConfig: (attribute,value) => {config[attribute] = value},
    getDatabaseConnection: () => databaseConnection,
    getConfig: ()=> config,

    testConnection,
    customQuery,
    isEmptyObject,
    checkForExistence
}