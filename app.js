const express = require('express');
const app = express();
const port = process.env.PORT||8000;

const { Client } = require('pg');
const { send } = require('process');
const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/WorldCup2022'
const client = new Client({
  connectionString: connectionString
});
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

app.use(express.json());

app.get('/matches',(req,res)=>{
  client.query('SELECT * FROM matches')
  .then(result=>{
    result.send(result.rows);
  })
  .catch(e=> console.error(e.stack));
});

app.get('/teams',(req,res)=>{
  client.query('SELECT * FROM teams')
  .then(result=>{
    result.send(result.rows);
  })
  .catch(e=> console.error(e.stack));
});

app.get('/venues',(req,res)=>{
  client.query('SELECT * FROM venues')
  .then(result=>{
    result.send(result.rows);
  })
  .catch(e=> console.error(e.stack));
});

app.listen(port,()=>{
  console.log(`listening on port: ${port}`)
});