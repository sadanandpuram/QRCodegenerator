const express = require('express');
const generate = require('./src/controllers/generate.controller');
const PORT = 5000;

const app = express();

app
  .set('view engine', 'ejs')
  .use(express.static('public'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .get('/', (req, res) => {
    res.render('index');
  })
  .post('/generate', generate)
  .listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
  });
