const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express();

app.set('port', process.env.PORT || 3000)
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

app.use(require('./routes/app-routes.js'))

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.status(404).render('index')
})

app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})