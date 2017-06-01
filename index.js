var express = require('express');
var app = express();

app.use(express.static('views'));


app.get('/', (req, res) => {
  res.redirect('/index.html');
})


var port = process.env.PORT || 8000;


app.listen(port);

console.log("Server running at http://localhost:%d", port);
