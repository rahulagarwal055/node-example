var express = require('express');
var app = express();
var http=require('http');
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("I am done now");
})

app.set('port', 3000);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
