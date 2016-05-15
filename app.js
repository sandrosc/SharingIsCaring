var express = require('express');
var app = express();

// set the static files location
app.use(express.static(__dirname));

//return index to pages
app.get('/SharingIsCaring/category/*', function (req, res) {
    res.sendFile('/SharingIsCaring/index.html', { root: __dirname });
});
app.get('/SharingIsCaring/search/*', function (req, res) {
    res.sendFile('/SharingIsCaring/index.html', { root: __dirname });
});
app.get('/SharingIsCaring/share', function (req, res) {
    res.sendFile('/SharingIsCaring/index.html', { root: __dirname });
});
app.get('/SharingIsCaring/login', function (req, res) {
    res.sendFile('/SharingIsCaring/index.html', { root: __dirname });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});