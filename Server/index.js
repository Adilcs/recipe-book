const jwt = require('jsonwebtoken');
const tokenSecret = 'fuckyoupassport'
const express = require('express')
const app = express()
const port = 3001
const sqlite3 = require('sqlite3')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const forgeLoginToken = (user) => {
    const token = jwt.sign({ id: user.id, full_name: user.first_name + " " + user.last_name, email: user.email }, tokenSecret);
    if (jwt.verify(token, tokenSecret)) {
        console.log("Forged token for id " + user.id)
        return token;
    }
}

const loginUser = (req, res) => {
    return db.get('SELECT id, email, first_name, last_name FROM Users WHERE email = ? AND password = ?', [
        req.body.email,
        req.body.password
    ], (err, user) => {
        if (err) { return done(err); }
        if (!user) {
            return res.send({ status: 401, message: 'Incorrect username.' });
        }
        if (!user.password === req.body.password) {
            return res.send({ status: 401, message: 'Incorrect password.' });
        }
        return res.send({ status: 200, success: "Logged in!", token: forgeLoginToken(user) });
    });
}
app.post('/login', (req, res) => loginUser(req, res))


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

const getRecipes = (res)=>{

           db.all(`SELECT Recipe.*, Users.first_name, Users.last_name
           FROM Recipe LEFT JOIN Users ON Recipe.user_id = Users.id
           ORDER BY Recipe.id DESC`, [], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((row) => {rows.img = '/img/food.jpg'})
              return res.send({ status: 200, recipes: rows })
         //   });
          });
        }
        app.get('/recipes', ( req,res) => getRecipes(res))

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