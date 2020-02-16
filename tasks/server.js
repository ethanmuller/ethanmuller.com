const express = require('express');

const app = express();
const PORT = process.env.PORT || 6969;

app.use('/', express.static('dist'));

//404 redirects to home page
app.use(function (req, res, next) {
  res.status(404).redirect('/');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
