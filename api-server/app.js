const express = require('express');
const app = express();
const cors = require('cors');
const { Client } = require('pg');
const { json } = require('express');

const config = require('./config')[process.env.NODE_ENV||"dev"];
const port = config.port;


const client = new Client({
  connectionString: config.connectionStrings
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('ARGENTINA WORLD CUP CHAMPIONS 2022 LES GOOOO!!')
});

app.get('/firstmatches',(req,res)=>{
  client.query('SELECT * FROM firstMatches')
  .then(result=>{
    res.send(JSON.stringify(result.rows));
  })
  .catch(e=> console.error(e.stack));
});

app.get('/teams',(req,res)=>{
  client.query('SELECT * FROM teams')
  .then(result=>{
    res.send(JSON.stringify(result.rows));
  })
  .catch(e=> console.error(e.stack));
});

app.get('/venues',(req,res)=>{
  client.query('SELECT * FROM venues')
  .then(result=>{
    res.json(result.rows);
  })
  .catch(e=> console.error(e.stack));
});

app.get('/predictions',(req,res)=>{
  client.query('SELECT * FROM predictions')
  .then(result=>{
    res.send(JSON.stringify(result.rows));
  })
  .catch(e=> console.error(e.stack));
});

app.post('/predictions',(req,res)=>{
  let predictions = req.body;
  let name = predictions.name;
  let team = predictions.team;

  client.query(`INSERT INTO predictions (name,team) VALUES ("${name}","${team}")`)
  .then(()=>{
    client.query(`SELECT * FROM predictions`)
    .then(result=>{
      res.send(result.rows)
    })
  })
  .catch(e=>{console.error(e.stack)});
});

app.delete('/predictions/:id', (req,res)=>{
  client.query(`DELETE FROM predictions WHERE id=${req.params.id}`)
  .then(result=>{
    res.send(result.rows)})
   .catch(e=>{
    console.error(e.stack)
   })
});

app.listen(port,()=>{
  console.log(`listening on port: ${port}`)
});
