var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "./notas.db";
var db = new sqlite3.Database(DBPATH);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Olá Lucas!");
});

app.post("/dado", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  let titulo = req.body.titulo;
  let conteudo = req.body.conteudo;

  let sql = `INSERT INTO notas (titulo, conteudo) VALUES ("${titulo}", "${conteudo}")`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("passei aqui 1");
      res.send(err);
    } else {
      console.log("passei aqui 2");
      res.send("Nota adicionado.");
    }
  });
});

app.get("/tudo", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("Estou aqui!");
  db.all(`SELECT * FROM notas.db`, [], (err, rows) => {
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
