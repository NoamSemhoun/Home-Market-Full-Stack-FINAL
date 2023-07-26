const express = require('express');
const database = require('./../DataBase/index.js')


// Initial Variables
const app = express();
app.use(express.json());

const users = require('./Routes/users.js');
const items = require('./Routes/items.js');
app.use('/users',users);
app.use('/items',items);

const hostname = '127.0.0.1';
const port = process.env.PORT || 3001;

const databseConfig = {
        host: "localhost",
        user: "root",
        password: "AvishayDEV19",
        port: 3306,
        database: 'HomeMarketDB'
}

app.get('/',(req,res) => {
    res.send('Hi There!')
});

async function run(){
    await database.connect(databseConfig);

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}
run();