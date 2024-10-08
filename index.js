//all of these are importing express and other needed engines and setting up the basics to make routes work
console.log('Starting server...');
// rest of your code

const express = require('express');

console.log('Express loaded...');

const fs = require('fs');

console.log('fs loaded...');

let path = require('path');

console.log('path loaded...');

console.log('Modules loaded...');

const session = require('express-session');



const port = process.env.PORT || 3000; //this works with aws and localhost

let app = express();



app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

const moment = require('moment');

/*This sets up the database to work both with RDS and with local postgres
const knex = require('knex')({ 
client: 'pg',
connection: {
    host: process.env.RDS_HOSTNAME || 'localhost',
    user: process.env.RDS_USERNAME || 'test',
    password: process.env.RDS_PASSWORD || 'test',
    database: process.env.RDS_DB_NAME || 'INTEX',
    port: process.env.RDS_PORT || 5432,
    ssl: process.env.DB_SSL ? {rejectUnauthorized: false} : false
}
});
*/

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log('My server is listening'));

//This is the page that renders when the user first logs in
app.get("/", (req, res) => {  
    res.render('landing');
});

app.get("/resume", (req, res) => {  
    res.render('resume.ejs');
});

app.get("/portfolio", (req, res) => {  
    res.render('portfolio');
});

app.get("/misc", (req, res) => {  
    res.render('misc');
});