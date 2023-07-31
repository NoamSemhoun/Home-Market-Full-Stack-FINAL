const express = require('express');
const database = require('./../DataBase/index.js');
const cors = require('cors');


// Initial Variables
const app = express();
app.use(express.json());

app.use(cors());
app.options('*',cors());

const users = require('./Routes/users.js');
const items = require('./Routes/items.js');
app.use('/users',users);
app.use('/items',items);

const hostname = '127.0.0.1';
const port = process.env.PORT || 3001;

const databaseConfig = {
        host: "localhost",
        user: "root",
        password: "NoaSQL26@",//NoaSQL26@ AvishayDEV19
        port: 3306,
        database: 'HomeMarketDB'
}

app.get('/',(req,res) => {
    res.send('Hi There!')
});

async function run(){
    let error = await database.connect(databaseConfig);
    console.log(error);
    if (error.error) return;

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}
run();