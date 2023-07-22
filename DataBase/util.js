

// -------------- Variables --------------
let databaseConnection;
let config;


// -------------- Help Functions --------------

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

module.exports = {
    setDatabaseConnection: (connection) => { databaseConnection = connection; },
    setConfig: (conf) => { config = conf; },
    updateConfig: (attribute,value) => {config[attribute] = value},
    getDatabaseConnection: () => databaseConnection,
    getConfig: ()=> config,
    testConnection,
    customQuery
}