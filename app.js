const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`running api on port ${port}`);
});

app.get("/", async (req, res) => {
    res.json({status:"Hay I found a Turnip"});
});

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'repaircar_db'
});