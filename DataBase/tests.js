const index = require('./index.js');

const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "AvishayDEV19", // change password here
    port: 3306,
    database: 'Tests'
};



async function run(){
    let error = await index.connect(databaseConfig);
    console.log(error);
    if (error.error) return;

    error = await index.getTable('tests');
    console.log(error);
    if (error.error) return;

    error = await index.updateTable('tests',['id'],[{id:1,name:'koko'}]);
    console.log(error);
    if (error.error) return;

    error = await index.getTable('tests');
    console.log(error);
    if (error.error) return;
}

run();