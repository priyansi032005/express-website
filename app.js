const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/views/home.html')
  })
  app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html')
  })
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/views/contact.html')
  })
  app.get('/cake', (req, res) => {
    res.send('Hello cake!')
  })
  app.get('/cake/surat', (req, res) => {
    res.send('Hello cake surat!')
  })
  app.get('/cake/ahmedabad', (req, res) => {
    res.send('Hello cake ahmedabad!')
  })
  app.get('/cake/chennai', (req, res) => {
    res.send('Hello cake chennai!')
  })
  app.get('/cake/pune', (req, res) => {
    res.send('Hello cake pune!')
  })
  app.get('*', (req, res) => {
    res.send('<h1>404 Not Found<h2>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})