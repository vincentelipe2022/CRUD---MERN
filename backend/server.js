const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const cors = require('cors');
app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',      // Your database host
    user: 'root',           // Your database username
    password: '',   // Your database password
    database: 'test_db' // Your database name
  });

app.get('/', (req, res) => {
  res.send('This is home backend go to frontend');
});


app.get('/users',(req,res) => {
    const sql = 'Select * from users';
   connection.query(sql , (err,data) =>{
     if(err){
       return res.json(err);
     }else{
       return res.json(data);
     }
   })
 })

 app.get('/users/:id',(req,res) => {
  const sql = 'Select * from users where id = ?';
  const id = req.params.id;
 connection.query(sql,[id], (err,data) =>{
   if(err){
     return res.json(err);
   }else{
     return res.json(data);
   }
 })
})

 app.post('/create-user',(req,res) => {
  const sql = "INSERT INTO users ( name, age, address) VALUES ( ? )";
  const values = [
    req.body.name,
    req.body.age,
    req.body.address
  ]
  connection.query(sql, [values], (err,data) =>{
    if(err){
      return res.json('err');
    }else{
      return res.json(data);
    }
  })
})

app.put('/update-user/:id',(req,res) => {
  const sql = "UPDATE users set name=? , age=? , address=? where ID =?";
  const values = [
    req.body.name,
    req.body.age,
    req.body.address
  ]
  const id = req.params.id;
  connection.query(sql, [...values, id], (err,data) =>{
    if(err){
      return res.json('err');
    }else{
      return res.json(data);
    }
  })
})

app.delete('/users/:id',(req,res) => {
  const sql = "delete from users where ID =?";
  const id = req.params.id;
  connection.query(sql, [id], (err,data) =>{
    if(err){
      return res.json('err');
    }else{
      return res.json(data);
    }
  })
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

