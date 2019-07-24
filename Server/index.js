var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
  var session = require("express-session")
const express = require('express')
const app = express()
const port = 3001
const sqlite3 = require('sqlite3')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
      },
    function(username, password, done) {
        db.get('SELECT email FROM Users WHERE email = ? AND password = ?', [
           username,
            password
        ], (err, user) => {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.password===password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  app.post('/login',passport.authenticate('local',
        { successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true }),
        function(req, res) {
          // If this function gets called, authentication was successful.
          // req.user contains the authenticated user.
          return res.send({ status: 200, success:  req.user });
        })
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


let db = new sqlite3.Database("./recipedb.db", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        
      //  createTable()
    } 
})

let sql = `SELECT id recipeid,
                  title title
           FROM Recipe`;


           db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((row) => {
              console.log(row.title);
            });
          });

         /* let sql2 = 'INSERT INTO Recipe(title,description,ingredients,steps,user_id) VALUES ("testpost","testdesc","testing","teststep",2);'
          db.run(sql2, function(err) {
            if (err) {
              return console.error(err.message);
            }
            console.log(`Rows inserted ${this.changes}`);
          });
*/







const registerUser = async (req, res) => {
    console.log("Registered New User: " + req.body.email);

    db.run('INSERT INTO Users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password
    ]);
    return res.send({ status: 200, success: "User registered: " + req.body.email })
    //
}



app.post('/user', (req, res) => registerUser(req, res))