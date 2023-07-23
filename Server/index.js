const Joi = require('joi');
const express = require('express');
const database = require('./../DataBase/index')


const usersRoute = require('./Routes/users')

// Initial Variables
const app = express();
app.use(express.json());
app.use('/users',usersRoute);


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
})

async function run(){
    await database.connect(databseConfig);

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}
run();