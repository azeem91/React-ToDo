const express    = require('express');      // call express
var app        = express();                 // define our app using express

const port = process.env.PORT || 3000;      // set our port

const router = express.Router();            // get an instance of the express Router

app.use('/', router);
app.use('/dist', express.static('dist'));   // Serve stact assets        

// Permessions - cors handeling - custom responce header stub
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');   
});

// START THE SERVER
app.listen(port);
console.log('Site is up on localhost: ' + port);