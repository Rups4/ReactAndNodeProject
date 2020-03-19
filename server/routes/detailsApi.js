var express = require('express');
var router = express.Router();
var cors=require('cors');
router.options('/',cors());
const {Pool,Client} = require('pg');
const con='pg://postgres:Rups@1990@localhost:5432/postgres';


const client = new Client({
   /*  user: 'postgres',
    host: 'localhost',
    database: 'my_db',
    password: 'rups4890',
    port: 5432, */
    connectionString:con
  });

  client.connect();

router.post('/save', cors(),function(req, res, next) {
    const data=req.body.details;
    console.log("print data here",data);
    const Name=data.name;
    const Email=data.email;
    const Headline=data.headline;
    const PhoneNumber=data.number;
    const Summary=data.summary;
    const cerDetails=JSON.stringify(data.certificatedetails);
    const techSkills=data.technicalSkills;
     
     client.query("insert into maintable (FullName,Email,Headline,PhoneNumber,Summary,certificatedetails,TechnicalSkills) values ('"+Name+"','"+Email+"','"+Headline+"','"+PhoneNumber+"','"+Summary+"','"+cerDetails+"','"+techSkills+"')",
      (err, res) => {
      console.log(err, res)
    });
    res.send('API is working properly');
});

router.get('/getValue', cors(),function(req, res, next) {
 
   client.query("select * from maintable where UID=11",(error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
   // client.end();
 
});

module.exports = router;