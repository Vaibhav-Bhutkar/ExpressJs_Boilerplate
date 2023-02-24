var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello VB!");
});

app.get('/hello', function (req, res) {
    res.send("You just called the get method at '/hello'!\n");
});

app.listen(5000, () => {
    console.log("VB app running on port 5000");
});