const express = require('express')
const app = express()
const port = 3001
const sqlite3 = require('sqlite3')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


let db = new sqlite3.Database("./recipedb.db", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here */
      //  createTable()
    } 
})

const insertData = () =>{
    console.log("Insert data")
    db.run('INSERT INTO contacts (name) VALUES (?)', ["contact 001"]);
}