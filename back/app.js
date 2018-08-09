// ----------------------------------------------------------------- Needed libs
const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();

// ----------------------------------------------------------- App configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

// ---------------------------------------------------------- API implementation
app.get("/", (req,res) => {
    res.send("Welcome Home");
})

// Auth Routes
var auth = require('./routes/auth/auth');
app.use('/auth', auth);

// Other routes
//require("./routes/auth/auth")(app);

// #404 'Not Found'
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// ------------------------------------------------------------- Node server run
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port ' + server.address().port);
});
