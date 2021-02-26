const express = require('express')
const bodyParser = require('body-parser')

// const express = require('express');
// const fileUpload = require('express-fileupload');
// const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const session = require('express-session');
// const redisStore = require('connect-redis')(session);
const app = express();

// const app = express()
const port = 5000

// Static Files
// app.use(express.static('public'))

// // Templating Engine
// app.set('views', 'views')
// app.set('view engine', 'ejs')

// app.use(bodyParser.urlencoded({ extended : true }))

// Routes
// const newsRouter = require('./src/routes/news')

// app.use('/', newsRouter)
// app.use('/article', newsRouter)

// Listen on port 5000
app.set('port', process.env.port || port); // set express to use this port
const viewsDirPath = path.join(__dirname, "templates", "views");
app.set('views',viewsDirPath); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

app.get("/",function(req,res,next){

    res.render("index.ejs");



});

app.listen(port, () => console.log(`Listening on port ${port}`))