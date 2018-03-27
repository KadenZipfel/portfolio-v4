const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/natours', (req, res) => {
  res.render('portfolio/Natours/index.ejs');
});

app.listen(process.env.PORT, () => {
  console.log('Server is running');
});