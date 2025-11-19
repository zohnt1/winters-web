const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// view engine + views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files folder (optional)
app.use('/public', express.static(path.join(__dirname, 'public')));

// home route -> renders views/index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

// start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
