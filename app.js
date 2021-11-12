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
    res.json({status:"Hay I found a Turnip " + results});
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

app.get(["/CarsContaining/:car", "/CarsContaining/"], async (req, res) => {
    const DBQuery = `CALL repaircar_db.SearchCarsContaining('${[req.params.car]}');`;
    DB.query(DBQuery, (error, results) => {
        if (results === undefined | !results) {
            res.json({ status: "Not Found: " + error});
        } else {
            res.json(results[0]);
        }
    });
});

app.post(["/AddCar/:carname"], async (req, res) => {
    const DBQuery = `CALL repaircar_db.AddCar('${[req.params.carname]}');`;
    DB.query(DBQuery, (error, results) => {
        if (results === undefined | !results) {
            res.json({ status: "Not Found: " + error});
        } else {
            res.json({ status: " car " + [req.params.carname] + " added"});
        }
    });
});

app.get(["/FindCarParts/:carID"], async (req, res) => {
    const DBQuery = `CALL repaircar_db.FindCarParts('${[req.params.carID]}');`;
    DB.query(DBQuery, (error, results) => {
        if (results === undefined | !results) {
            res.json({ status: "Not Found: " + error});
        } else {
            res.json(results[0]);
        }
    });
});

app.get(["/FindCarSKUs/:carID"], async (req, res) => {
    const DBQuery = `CALL repaircar_db.FindCarSKUs('${[req.params.carID]}');`;
    DB.query(DBQuery, (error, results) => {
        if (results === undefined | !results) {
            res.json({ status: "Not Found: " + error});
        } else {
            res.json(results[0]);
        }
    });
});

app.post(["/ChangePartBySKU/:SKU/:Broken"], async (req, res) => {
    const DBQuery = `CALL repaircar_db.ChangePartBySKU(${[req.params.SKU]},${[req.params.Broken]});`;
    DB.query(DBQuery, (error, results) => {
        if (results === undefined | !results) {
            res.json({ status: "Not Found: " + error});
        } else {
            res.json({ status: " part SKU " + [req.params.SKU] + " broken changed to " + [req.params.Broken]});
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

//ChangePartBySKU