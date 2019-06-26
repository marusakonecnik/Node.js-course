const path = require('path')
const express = require('express')
const app = express()

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'../templates'))//setting a path to templates

//Setup statc diretory to serve
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index', {
        title: 'Weather app',
        name: 'Marusa Konecnik'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About me'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title: 'Help',
        message: 'Hello, need some help?'
    })
})

app.get('/weather', (req,res)=>{
    res.send({
        forecast: 'Sunny',
        location: 'Maribor'
    })
})


app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
}) // starts up  a server and listends on a specific port, a callback is called when the server is up and running

