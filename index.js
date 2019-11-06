const express = require('express')
const app = express()
let teams = require('./teams.json')
const http_port = 1338
const bodyParser = require('body-parser')



app.get('/teams',(req,res) => {
    res.send(teams)
})
app.get('/teams/:filter', (req,res) => {
    let result = teams.filter((team) => {
        let filter = req.params.filter
        console.log(filter)
        return team.id  == filter || team.abbreviation == filter
    })
    res.send(result)
})

app.post('/teams/', bodyParser.json(), (req,res) => {
    const body = req.body || {}
    let newTeam = teams.push(body)
    if (!"location" || !"mascot" || !"abbreviation" || !"conference" || !"division") {
        res.status(400).send('The following attributes are required: location, mascot, abbreviation, conference, division')
    }
  console.log({body})
  res.send(body)
})


app.all('*', (req,res) => {
    console.log({req})
    res.send('Not Found')
})

    app.listen(http_port, () => {
        console.log(`Listening on ${http_port}`)
    }) 
module.exports = app