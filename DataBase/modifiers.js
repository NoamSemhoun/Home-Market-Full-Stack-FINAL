const util = require('./util.js')

// -------------- Modifies --------------

async function addColumn(tableName, column, values, identifiers){
    const columnNameValue = Object.entries(column)[0];
    const identifiersList = Object.entries(identifiers)[0];

    // Create the ALTER TABLE query to add the new column
    const alterTableQuery = `ALTER TABLE ${tableName} ADD COLUMN ${columnNameValue[0]} ${columnNameValue[1]}`;

    // Execute the ALTER TABLE query to add the new column
    let error = await util.customQuery(alterTableQuery);
    if (error.error) return error;

    const errors = [];
    const success = [];
    // Loop through the values and insert them into the table
    const valuesPromises = values.map(async (value, index) => {
        const insertQuery = `UPDATE ${tableName} SET ${columnNameValue[0]} = ? WHERE ${identifiersList[0]} = ?`;
        error = await util.customQuery(insertQuery, [value, identifiersList[1][index]]);
        if (error.error) 
            errors.push(`Instance in index ${index} return error: ${error.error}`);
        else
            success.push(`Instance in index ${index} Successfully Updated`)
    });

    await Promise.all(valuesPromises);

    return success.length === values.length ? 
        {success:"Column Insert Successfully."}:
        {error: errors+success } ;
}

function removeColumn(tableName,columnName){
    return util.customQuery(`ALTER TABLE ${tableName} DROP COLUMN ${columnName}`);
}

function modifyColumn(tableName, column, signs){
    const query = `ALTER TABLE ${tableName} MODIFY ${Object.entries(column)[0].join(' ')} ${signs.join(' ')}`;
    return util.customQuery(query);
}

function addForeignKey(constraint_name, tableName, ColumnName,foreignTableName,foreignColumnName){
    const query = `ALTER TABLE ${tableName} ADD CONSTRAINT ${constraint_name} FOREIGN KEY (${ColumnName}) REFERENCES ${foreignTableName} (${foreignColumnName})`;
    return util.customQuery(query);
}

function removeForeignKey(constraint_name, tableName){
    const query = `ALTER TABLE ${tableName} DROP FOREIGN KEY ${constraint_name}`;
    return util.customQuery(query);
}

module.exports = {
    addColumn,
    removeColumn,
    modifyColumn,
    addForeignKey,
    removeForeignKey
}