let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(session({secret:"secret"}))
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function(req,res){
    if(req.session.counter === undefined){
        req.session.counter = 0;
    }else{
        req.session.counter += 1;
    }
    
    res.render('index',{times: req.session.counter});
})

app.post('/addTwo', function(req,res){
    req.session.counter += 1;
    res.redirect('/')
})

app.post('/reset', function(req,res){
    req.session.counter = 0;
    res.redirect('/')
})

app.listen(8000)




