const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()
app.use(bodyParser.json())

app.get('/api/env', async (req, res) => {

    const env = process.env
    const json = JSON.stringify(env)

    const somekey = env.somekey
    const sqlConn = env.SQLCONNSTR_connection

    res.send(json)
})

app.get('/api/hello', async (req, res) => {

    res.send('Hello World')
})

app.get('/api/merhaba', (req, res) => {

    res.send('Merhaba Dünya')
})

app.get('/api/selam', (req, res) => {

    res.send('Selam Dünya')
})

app.post('/api/name', (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName'])
    console.log(body)
    res.send('Hello '+body.firstName+' '+body.lastName)
})

app.listen(8080, () => {
    console.log('app server is running')
})