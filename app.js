var express = require('express');
var app = express();

// set the static files location
app.use(express.static(__dirname));

//return index to pages
app.get('/category/*', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.get('/search/*', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.get('/share', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.get('/login', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});