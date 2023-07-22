const index = require('./index.js');

const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "AvishayDEV19",
    port: 3306,
    database: 'HomeMarketDB'
};

async function printTable(tableName){
    const error = await index.getTable(tableName)
    console.log(error);
}

async function run(){
    let error = await index.connect(databaseConfig);
    if (error.error) {
        console.log(error);
        return;
    }

    await printTable('users')

    error = await index.insertToTable('users',[{name:'lala'}]);
    if (error.error) {
        console.log(error);
        return;
    }

    await printTable('users')

}
run();