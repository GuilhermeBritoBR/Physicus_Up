const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); // Importe o pacote cors
const mysql = require("mysql");
//express = app
const app = express();
//config body parser
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));
//conexão myslq
const db = mysql.createConnection({
  host: `localhost`,
  user: "root",
  password: "flamengo",
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
app.get('/',(req,res)=>{
  res.send('SERVER API!');
})
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
app.post("/api/createDados", (req, res) => {
  const { name, distance, level, time, obs, date, pace, timeString } = req.body;
  const query =
    "INSERT INTO tabela (name, distance, level, time, obs, date, pace, timeString) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(query, [name, distance, level, time, obs, date, pace, timeString], (err, result) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      res.status(500).send("Erro ao criar usuário");
    } else {
      console.log("Usuário criado com sucesso");
      res.send(result);
    }
  });
});
//salvar dados do Imc em arquivo JSON tmj
app.post('/api/save_imc', (req,res)=>{
  const newData = req.body;
  const jsonData = JSON.stringify(newData, null, 2);
  fs.writeFile("ImcDataBase.json", jsonData, (err) => {
    if (err) {
      console.error("Erro ao atualizar o arquivo JSON:", err);
      res.status(500).send("Erro ao atualizar o arquivo JSON");
      return;
    }
    console.log("Arquivo JSON atualizado com sucesso");
    res.send("Arquivo JSON atualizado com sucesso");
  
  });
});

app.post('/api/saveRecorde', (req,res)=>{
  const newData = req.body;
  const jsonData = JSON.stringify(newData, null, 2);
  fs.writeFile("RecordDataBase.json", jsonData, (err) => {
    if (err) {
      console.error("Erro ao atualizar o arquivo JSON:", err);
      res.status(500).send("Erro ao atualizar o arquivo JSON");
      return;
    }
    console.log("Arquivo JSON atualizado com sucesso");
    res.send("Arquivo JSON atualizado com sucesso");
  
  });
});
app.get("/api/get_recorde", (req, res) => {
  fs.readFile("RecordDataBase.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo JSON:", err);
      res.status(500).send("Erro ao ler o arquivo JSON");
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});
//buscando dados do Imc 
app.get("/api/get_imc", (req, res) => {
  fs.readFile("imcDataBase.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo JSON:", err);
      res.status(500).send("Erro ao ler o arquivo JSON");
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});
//update trainning
app.post('/data_trainning',(res,req)=>{
  const newData = req.body;
  const jsonData = JSON.stringify(newData, null, 2);
  fs.writeFile("DataBaseTrainning.json", jsonData, (err) => {
    if (err) {
      console.error("Erro ao atualizar o arquivo JSON:", err);
      res.status(500).send("Erro ao atualizar o arquivo JSON");
      return;
    }
    console.log("Arquivo JSON atualizado com sucesso");
    res.send("Arquivo JSON atualizado com sucesso");
  
  });
})
app.get('/physicusup/meustreinos',(req,res)=>{
    db.query('SELECT * FROM tabela', (err, result) => {
        if (err){
        console.log(err);
        res.send(err);
        return;
        }
        else{
          console.log('Deu certo meus treinos');
          res.json(result);
        }
    });
  
})
//base academia
app.post('/api/createDadosAcademy',(req,res)=>{
  const { name, level, time, date, series, train } = req.body;
  const query =
    "INSERT INTO acdemy ( name, level, time, date, series, train) VALUES ( ?, ?, ?, ?, ?, ? )";
  db.query(query, [ name, level, time, date, series, train], (err, result) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      res.status(500).send("Erro ao criar usuário");
    } else {
      console.log("Academia com sucesso");
      res.send(result);
    }
  });
});
app.get('/physicusup/meustreinosAcademy',(req,res)=>{
  db.query('SELECT * FROM acdemy', (err, result) => {
      if (err){
      console.log(err);
      res.send(err);
      return;
      }
      else{
        console.log('Deu certo meus treinos');
        res.json(result);
      }
  });

});
app.get('/physicusup/volume-km',(req,res)=>{
  db.query('SELECT SUM(distance) AS volume_km FROM tabela', (err, result) => {
    if (err){
      return res.status(500).json({ error: err.message });
    }
    else{
      res.json(result[0]);
    }
});
}
);
app.get('/physicusup/id-total',(req,res)=>{
  db.query('SELECT COUNT(*) AS id_total FROM tabela', (err, result) => {
    if (err){
      return res.status(500).json({ error: err.message });
    }
    else{
      res.json(result[0]);
    }
});
}
);
app.get('/physicusup/media',(req,res)=>{
  db.query('SELECT AVG(distance) AS media FROM tabela', (err, result) => {
    if (err){
      return res.status(500).json({ error: err.message });
    }
    else{
      res.json(result[0]);
    }
});
}
);
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
