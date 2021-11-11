const express = require("express");
const mysql = require("mysql");
const app = express();
const DBinfo = require('./Database_config.json');

const PartsM = require('./models/Parts.model.js');

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`running api on port ${port}`);
});

app.get("/", async (req, res) => {
    res.json({status:"Hay I found a Turnip"});
});

app.get(["/PartsContaining/:part", "/PartsContaining/"], async (req, res) => {
    const DBQuery = `CALL repaircar_db.FindPartsContaining('${[req.params.part]}');`;
    DB.query(DBQuery, (error, results) => {
        if (results === undefined | !results) {
            res.json({ status: "Not Found: " + error});
        } else {
            res.json(results[0]);
        }
    });
});

const DB = mysql.createConnection({
    host: DBinfo.host,
    user: DBinfo.user,
    password: DBinfo.password,
    database: DBinfo.database,
    port: DBinfo.port
});