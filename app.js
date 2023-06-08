var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "./teste.db";
var db = new sqlite3.Database(DBPATH);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Olá");
});

app.post("/dado", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  let title = req.body.title;
  let body = req.body.body;

  let sql = `INSERT INTO Nota (title, body) VALUES ("${title}", "${body}")`;
 
  db.all(sql, [], (err, rows) => {

    if (err) {
      console.log(err)
      console.log("passei aqui 1");
      res.send(err);
    } else {
      console.log("Deu certo");
      res.send("Nota adicionado.");
    }
  });
});

app.get("/tudo", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("Estou aqui!");
  db.all(`SELECT * FROM Nota`, [], (err, rows) => {
    if (err) {
      console.log("aqui 2");
      res.send(err);
    }
    console.log("Linhas: " + rows);
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando com a porta ${port}`);
});
