const http = require('http')
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

app.get('/iss-pass', (req, res) => {
	axios.get("http://api.open-notify.org/iss-pass.json", { params: req.query })
		.then(results => {
			res.json(results.data)
		})
})

app.get('/iss-astros', (req, res) => {
	axios.get("http://api.open-notify.org/astros.json", { params: req.query })
		.then(results => {
			res.json(results.data)
		})
})

app.get('/iss-now', (req, res) => {
	axios.get("http://api.open-notify.org/iss-now.json", { params: req.query })
		.then(results => {
			res.json(results.data)
		})
})

const server = http.createServer(app)

server.listen(PORT, () => {console.log(`listening on port: ${PORT}`)})