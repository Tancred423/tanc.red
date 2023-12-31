const path = require('path')
const express = require('express')
const app = express()
const port = 7000
const fs = require('fs')
const config = require('../config.json')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// Share

function passwordCheck(req, res, next) {
  if (req.query.password === config.password) {
    next()
  } else {
    res.sendStatus(401)
  }
}

app.get('/share/', passwordCheck, (req, res) => {
  const files = fs.readdirSync(`${__dirname}/share`)
  files.length === 1
    ? res.send('No files found')
    : res.render('share', { files })
})

app.get('/share/:fileName', (req, res) => {
  const { fileName } = req.params
  const filePath = `${__dirname}/share/${fileName}`

  fs.existsSync(filePath) ? res.sendFile(filePath) : res.sendStatus(404)
})

// Redirects

for (const redirect of config.redirects) {
  app.get(redirect.from, (req, res) => {
    res.redirect(redirect.to)
  })
}

app.get('*', (req, res) => {
  res.redirect(config.default_redirect)
})

app.listen(port, () => {
  if (config.is_production) {
    console.log(`Listening on port ${port}`)
  } else {
    console.log(`http://localhost:${port}`)
    console.log(`http://localhost:${port}/share`)
    console.log(`http://localhost:${port}/share?password=${config.password}`)
  }
})
