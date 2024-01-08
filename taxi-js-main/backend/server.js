const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Maharaja$23',
    database: 'taxiworld',
    port: '3306'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL database connected');
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
