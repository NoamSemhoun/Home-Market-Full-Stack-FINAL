const util = require('./util.js')

//-------------- Table --------------

function createTable(tableName,columns){
    const columnsString = Object.entries(columns).map(([key,value])=> `${key} ${value}`);
    return util.customQuery(`CREATE TABLE ${tableName} (${columnsString.join(', ')})`);
}

function deleteTable(tableName){
    return util.customQuery(`DROP TABLE IF EXISTS ${tableName}`);
}

function insertToTable(tableName, instances){
    const exampleInstance = instances[0];

    const columns = `(${Object.keys(exampleInstance).join(', ')})`;
    const values = instances.map((instance)=> Object.values(instance));
    
    const query = `INSERT INTO ${tableName} ${columns} VALUES ?`;
    return util.customQuery(query,[values]);
}

function removeFromTable(tableName, identifiers){
    const identifiersString = Object.entries(identifiers).map(([key,value])=>`${key} = ${value}`).join(' AND ');
    
    const query = `DELETE FROM ${tableName} WHERE ${identifiersString}`;
    return util.customQuery(query);
}

async function updateTable(tableName, identifiers, instances){
    const identifiersString = identifiers.map((id)=> `${id} = ?`).join(' AND ');

    const errors = [];
    const success = [];
    const instancesPromises = instances.map(async (instance,index)=>{
        let error = await util.customQuery(`UPDATE ${tableName} SET ? WHERE ${identifiersString}`, [instance, ...identifiers.map((id)=>instance[id])]);
        if (error.error) 
            errors.push(`Instance in index ${index} return error: ${error.error}`);
        else
            success.push(`Instance in index ${index} Successfully Updated`)
    });

    await Promise.all(instancesPromises);

    return success.length === instances.length ? 
        {success:"All The Instances Successfully Updated"}:
        {error: errors+success } ;
}

async function searchInTable(tableName,searchQuery,searchFields){
    const searchTerms = util.getAlphanum(searchQuery).split(' ');

    const orConditions = searchTerms
    .map((term) => `(${searchFields.map((field) => `${field} LIKE ?`).join(' OR ')})`)
    .join(' OR ');

    const n = searchFields.length;
    const duplicatedList = searchTerms.flatMap((element) => Array(n).fill(element));

    const query = `SELECT * FROM ${tableName} WHERE ${orConditions}`;

    return await util.customQuery(query,duplicatedList);

}

module.exports = {
    createTable,
    deleteTable,
    insertToTable,
    removeFromTable,
    updateTable,
    searchInTable
}