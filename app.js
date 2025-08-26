require('dotenv').config();
const express = require('express');

const app = express();
const expressLayouts = require('express-ejs-layouts');

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});