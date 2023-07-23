const util = require('./util.js')
const setup = require('./setup.js')

// -------------- Database --------------

/**
 * Function To Create Database.
 * @param {string} name The Database Name
 * @param {boolean} toConnect True (default) to connect the database after create it, False to not.
 * @returns {object} 'success' attribute for done successfully, and 'error' (with error message) for error.
 */
async function createDatabase(name,toConnect = true){
    let error = util.testConnection();
    if (error.error) return error;

    error = await util.customQuery(`CREATE DATABASE ${name}`);
    if (error.error) return error;

    if (!toConnect) return {success:"Database Created."};

    util.updateConfig('database' ,name);
    await setup.disconnect();
    await setup.connect(util.getConfig());

    return {success:"Database Created and Reconnected."};
}

/**
 * Function To Delete Database.
 * after deleting the database, new connection will created without specify database connection.
 * @param {string} name The Database Name
 * @returns {object} 'success' attribute for done successfully, and 'error' (with error message) for error.
 */
async function deleteDatabase(name){
    let error = util.testConnection();
    if (error.error) return error;

    error = await util.customQuery(`DROP DATABASE ${name}`);
    if (error.error) return error;

    util.updateConfig('database',undefined);
    await setup.disconnect();
    await setup.connect(util.getConfig());

    return {success:"Database Deleted and Reconnected."};
}

module.exports = {
    createDatabase,
    deleteDatabase
}