const { time } = require('console')
const express = require('express')
const { normalize } = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<a href="http://localhost:3000/ma-page">Ma page</a>')
})

app.get('/ma-page', (req, res) => {
  res.send('<form action="/creer-fichier" ><input type="text" name="mon_input"></form>')
})

app.get('/creer-fichier', (req, res) => {
  const fs = require('fs');
  const content = req.query.mon_input;
  const dateObj = new Date();

  let date = dateObj.getDate();

  let hours = dateObj.getHours();

  let minutes = dateObj.getMinutes();

  let seconds = dateObj.getSeconds();



    try {
        fs.writeFileSync('FICHIER_TXT/test_du_' + date + " à " + hours + "h" + minutes + "min" + seconds + "sec" + '.txt', content);
        res.send("Fichier créé !");
    } catch (err) {
        console.error(err);
        res.send("Echec de création du fichier.");
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


