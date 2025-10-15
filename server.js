var express = require('express');
var app = express()

app.set('view engine','ejs')
app.set('views', 'Resume')

app.use(express.static('Resume'));

app.get('/', function(req, res) {
    res.render('tk_resume');
});

app.listen(3000)