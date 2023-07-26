const database = require('./database.js');
const modifiers = require('./modifiers.js');
const queries = require('./queries.js');
const setup = require('./setup.js');
const table = require('./table.js');
const util = require('./util.js')

// -------------- Tests --------------

module.exports = {
    // util
    customQuery: util.customQuery,
    checkForExistence: util.checkForExistence,
    
    // setup
    connect: setup.connect,
    disconnect:setup.disconnect,

    // database
    createDatabase:database.createDatabase,
    deleteDatabase:database.deleteDatabase,

    // table
    createTable:table.createTable,
    deleteTable:table.deleteTable,
    insertToTable:table.insertToTable,
    removeFromTable:table.removeFromTable,
    updateTable:table.updateTable,
    searchInTable:table.searchInTable,

    //modifiers
    addColumn:modifiers.addColumn,
    removeColumn:modifiers.removeColumn,
    modifyColumn:modifiers.modifyColumn,
    addForeignKey:modifiers.addForeignKey,
    removeForeignKey:modifiers.removeForeignKey,

    // queries
    getTable:queries.getTable
}