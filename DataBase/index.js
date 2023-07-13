const index = require('./database.js');

const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "AvishayDEV19",
    port: 3306,
};


async function run(){
    let error = await index.connect(databaseConfig);
    if (error.error) console.log(error);

    error = await index.createDatabase('HomeMarketDB');
    if (error.error){
        console.log(error);
        return
    }

    error = await index.createTable('users',{id:'INT', name:'VARCHAR(50)', phone:'VARCHAR(20)', email:'VARCHAR(50)', address:'VARCHAR(100)'});
    if (error.error){
        console.log(error);
        return
    } 

    error = await index.insertToTable('users',[{id: 1, name:'avishaynoam', phone:'050-0000000', email:'avishaynoam@gmail.com', address:'JCT Jerusalem 1'}])
    if (error.error){
        console.log(error);
        return
    } 

    error = await index.getTable('users')
    if (error.error){
        console.log(error);
        return
    } 
    console.log(error);
}
run();