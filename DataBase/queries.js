const util = require('./util.js')


// -------------- Queries --------------

function getTable(tableName, identifiers = {}, columnNames = [], rowsIndexes = []){
    const identifiersString = !util.isEmptyObject(identifiers) ? ' WHERE ' + Object.keys(identifiers).map((key)=>`${key} = ?`).join(' AND ') : '';
    const columnsString = columnNames.length > 0 ? `${columnNames.join(', ')}` : '*';
    const limitString = rowsIndexes.length > 0 ? ` LIMIT ${rowsIndexes.join(', ')}` : '';

    const query = `SELECT ${columnsString} FROM ${tableName}`+ identifiersString + limitString;
    return util.customQuery(query,Object.values(identifiers));
}

function count(tableName, identifiers = {}){
    const identifiersString = !util.isEmptyObject(identifiers) ? ' WHERE ' + Object.keys(identifiers).map((key)=>`${key} = ?`).join(' AND ') : '';

    const query = `SELECT count(*) FROM ${tableName}`+ identifiersString;
    return util.customQuery(query,Object.values(identifiers));

}

function getOrderBy(tableName, columnOrder, page, pageSize){
    const startIndex = page*pageSize;
    const query = `SELECT * FROM ${tableName} ORDER BY ${columnOrder} DESC LIMIT ${startIndex}, ${pageSize}`

    return util.customQuery(query);
}


module.exports = {
    getTable,
    count,
    getOrderBy
}