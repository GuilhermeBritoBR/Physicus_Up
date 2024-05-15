const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); // Importe o pacote cors
const mysql = require("mysql");
//express = app
const app = express();
//conexão myslq
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "physicus_up",
});
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  }
});
app.use(cors()); // Adicione o middleware cors

app.use(bodyParser.json());

app.post("/usuario", (req, res) => {
  const newData = req.body;
  const jsonData = JSON.stringify(newData, null, 2);

  fs.writeFile("userDataBase.json", jsonData, (err) => {
    if (err) {
      console.error("Erro ao atualizar o arquivo JSON:", err);
      res.status(500).send("Erro ao atualizar o arquivo JSON");
      return;
    }
    console.log("Arquivo JSON atualizado com sucesso");
    res.send("Arquivo JSON atualizado com sucesso");
  });
});

app.get("/dados", (req, res) => {
  fs.readFile("userDataBase.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo JSON:", err);
      res.status(500).send("Erro ao ler o arquivo JSON");
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});
app.post("/addrun", (req, res) => {
  const SQL =
    "INSERT INTO run (name, distance, time, obs, date) VALUES (?,?,?,?,?)";
  const [name, distance, time, obs, date] = req.body;
  if (err) {
    console.log(`Erro na escrita do treino de corrida ${err}`);
  } else {
    db.query(SQL, [name, distance, time, obs, date], (err, result) => {
      if (err) {
        console.log(`Erro na escrita do treino de corrida ${err}`);
      } else {
        console.log(`Escrita do treino de corrida `);
        res.send("ENviado com sucesso!");
      }
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
