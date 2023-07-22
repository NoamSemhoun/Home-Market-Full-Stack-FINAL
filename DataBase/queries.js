const util = require('./util.js')

// -------------- Help Functions --------------
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}


// -------------- Queries --------------

function getTable(tableName, identifiers = {}, columnNames = [], rowsIndexes = []){
    const identifiersString = !isEmptyObject(identifiers) ? ' WHERE ' + Object.entries(identifiers).map(([key,value])=>`${key} = ${value}`).join(' AND ') : '';
    const columnsString = columnNames.length > 0 ? `(${columnNames.join(', ')})` : '*';
    const limitString = rowsIndexes.length > 0 ? ` LIMIT ${rowsIndexes.join(', ')}` : '';

    const query = `SELECT ${columnsString} FROM ${tableName}`+ identifiersString + limitString;
    return util.customQuery(query);
}

module.exports = {
    getTable,
}