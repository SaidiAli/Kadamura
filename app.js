const authenticated = './middleware/middleware';
const express = require('express')
const exphbs = require('express-handlebars')
const auth = require('./routes/auth')
const passport = require('./passport/setup')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const bodyParser = require('body-parser')
const pages = require('./routes/pages')


const MONGO_URI = 'mongodb://127.0.0.1:27017/kadamura'

app = express()

mongoose.connect(MONGO_URI, {useNewUrlParser: true})
  .then(console.log('MongoDB connected'))
  .catch(err => console.error(err))

// init middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public/assets'))

app.use(
  session({
    secret: "cat",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use('/auth', auth)

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")
app.use('/' ,pages)


app.listen(3000)