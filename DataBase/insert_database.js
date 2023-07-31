const index = require('./index.js');


const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "AvishayDEV19", // change password here
    port: 3306,
    database: 'HomeMarketDB'
};

async function printTable(tableName){
    const error = await index.getTable(tableName);
    console.log(error);
}

async function run(){
    let error = await index.connect(databaseConfig);
    console.log(error);
    if (error.error) return;

    error = await index.modifyColumn('items',{'brandUrl':'VARCHAR(80)'},[]);
    return console.log(error);

    // default user
    error = await index.insertToTable('usersMetadata',[
        {
            username:'AvishayDev',
            password:'123',
            apiKey: '123',
            userRank:'user'
        }
    ])
    console.log(error);
    if (error.error) return;

    error = await index.insertToTable('users',[
        {
            fname:'Avishay',
            lname:'Elihay',
            phone: '0507567700',
            email:'avishayelihay@gmail.com',
            address:'Shibolim 145',
            metadataId:1
        }
    ])
    console.log(error);
    if (error.error) return;

    await printTable('users');
    await printTable('usersMetadata');

    



}

run();