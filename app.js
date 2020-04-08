const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars')
const {Client,Pool} = require('pg')
const bcrypt = require('bcrypt')
const app = express();
const bodyParser = require('body-parser')
const viewDirectoryPath = path.join(__dirname,'../view')

app.use(bodyParser.urlencoded({
    extended: false
 }));
 
 app.use(bodyParser.json());

const dbConfig = {
    host:'localhost',
    user:'postgres',
    database:'postgres',
    password:'1234',
    port:5432
}

const pool = new Pool(dbConfig)
pool.on('error', function (err) {
	winston.error('idle client error', err.message, err.stack)
})

app.set('view engine','hbs')

app.get('/',(req,res)=>{
pool.query(`SELECT * FROM public.user`, (error, results) => 
{
    console.log('we did a query')
    if(error) 
    {
        console.log("Error: ",error)
    } else {
        // console.log("Results: ",results.rows)
        
        
        res.render('index', {data: results.rows});           
    }
})
  

})



app.get('/register', (req, res) => {
    // console.log(req.params.ID)
    res.render('register')
  })
  
  app.post('/register', async(req, res) => {
      try{
      const hashedpassword = await(bcrypt.hash(req.body.password, 10))
      const firstname = req.body.firstname
      const lastname = req.body.lastname
      const contact = req.body.contact
      const email = req.body.email
      const gender = req.body.gender
      const password = hashedpassword
      console.log(req.body)
      pool.query(`INSERT into public.user("Firstname","Lastname","Contact","Email","Gender","Password") VALUES('${firstname}','${lastname}','${contact}','${email}','${gender}','${password}')`,(err,res)=>{
          console.log(err)
      })
      
   res.redirect('/')
    }catch{
        res.redirect('register')
    }
  })

  app.get('/')

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})

