 
function deletebtn(n){
  var i = n.parentNode.parentNode.rowIndex;
  document.getElementById('usertable').deleteRow(i)
  console.log('deletion initiated........!')
  var query = 'delete from public.user where id = ($1)';
  var id = [req.body.Id];

  dbClient.query(query , id , function(err){
      if(err)
          throw err;
      else {
          console.log('Contact Deleted!') ;
          res.redirect('/');     
          res.end();
      }               
  });

}

function editbtn(n){     //Edit BTN ONclick 
  res.redirect('register')
  document.getElementById('usertable').onload() = function(){
  pool.query(`selcet * from public.user where Id=${n}`,(err,results)=>{
      const fname = results.rows.Firstname
      const lname = results.rows.Lastname
      const con = results.rows.Contact
      const em = results.rows.Email
      const gen = results.rows.Gender

      document.getElementById('fname').setAttribute('value',fname)
      document.getElementById('lname').setAttribute('value',lanem)
      document.getElementById('con').setAttribute('value',con)
      document.getElementById('em').setAttribute('value',em)
      document.getElementById('gen').setAttribute('value',gen)
  })
}
  var query = 'update public.user set Firstname=($1),Lastname=($2),Contact=($3),Email=($4),Gender=($5) where Id=($6)';
  var Firstname = req.query.Firstname;
  var Lastname = req.query.Lastname;
  var Contact = req.query.Contact;
  var Email = req.query.Email;
  var Gender = req.query.Gender;            

  dbClient.query(query , [Firstname,Lastname,Contact,Email,Gender,n], function(err){
      if(err)
          throw err;
      else {
          console.log('Contact Updated!') ;
          res.redirect('/');     
          res.end();
      }               
  });   
}