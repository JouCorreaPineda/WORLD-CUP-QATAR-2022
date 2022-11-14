const express = require('express');
const app = express();
const { Client } = require('pg');
// const { send } = require('process');

const config = require('./config')[process.env.NODE_ENV||"dev"];
const PORT = config.port;

const client = new Client({
  connectionString: config.connectionString
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

app.use(express.json());

app.get('/firstmatches',(req,res)=>{
  client.query('SELECT * FROM firstmatches')
  .then(result=>{
    res.send(result.rows);
  })
  .catch(e=> console.error(e.stack));
});

app.get('/teams',(req,res)=>{
  client.query('SELECT * FROM teams')
  .then(result=>{
    res.send(result.rows);
  })
  .catch(e=> console.error(e.stack));
});

app.get('/venues',(req,res)=>{
  client.query('SELECT * FROM venues')
  .then(result=>{
    res.send(result.rows);
  })
  .catch(e=> console.error(e.stack));
});

app.listen(port,()=>{
  console.log(`listening on port: ${port}`)
});