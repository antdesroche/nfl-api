const express = require('express')
const app = express()
let teams = require('./teams.json')
const http_port = 1338
const bodyParser = require('body-parser')
const models = (require('./models/teams'))

app.get('./teams',(req,res) => {
    models.Teams.findAll({include: {model: models.Teams}}).then((teams) => {
        res.send(teams)
    })
}) 


app.get('/teams',(req,res) => {
    res.send(teams)
})
app.get('/teams/:filter', (req,res) => {
    models.Teams.findOne({
        where: {filter: req.params.filter},
        include: {model: models.Teams}

    }).then((team) => {
        if (team) {
    res.send(team)
    }
    else { res.sendStatus(404)}
})
    let filter = req.params.filter
    let result = teams.filter((team) => {
        return team.id  == filter || team.abbreviation == filter || team.division == filter || team.conference == filter
    })
    let Locations = result.map((team) => {
        return team.location
    })
    res.send(Locations)
    console.log(filter)

app.get('/',(req,res) => {
    res.send('Welcome to my NFL database, enjoy this masterful code')
})
app.post('/teams', bodyParser.json(), (req,res) => {
    const body = req.body
   let newTeams = teams.concat(body)
    if (!body.id || !body.location || !body.mascot || !body.abbreviation || !body.conference || !body.division) {
        res.status(400).send('The following attributes are required: location, mascot, abbreviation, conference, division')
    }
    models.Teams.findOne({where: {filter: teamFilter} }).then((team) => {
        if (!team) {
            res.status(400).send(`Unknown team filter: ${teamFilter}`)
        }
    else {
        models.Teams.create({id, location, mascot, abbreviation, conference, division}).then((newTeam) => {
            res.status(201).send(newTeam)
        })
    }
})
})
  /*console.log({body})
  res.send(newTeams)*/



app.all('*', (req,res) => {
    console.log({req})
    res.send('Not Found')
})

    app.listen(http_port, () => {
        console.log(`Listening on ${http_port}`)
    })
})
