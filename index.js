const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = (require('./models'))
const Op = require('sequelize').Op

app.get('/teams', async (req,res) => {
    const teams = await models.teams.findAll()
        res.send(teams)
    
}) 



app.get('/teams/:filter', async (req,res) => {
    const {filter} = req.params
   const match = await models.teams.findOne({
        where: { [Op.or]: [{id: filter}, {abbreviation: filter}]}
    })
        if (match) {
    res.send(match)
    }
    else { res.sendStatus(404)}
})
    
app.post('/teams', bodyParser.json(), async (req,res) => {
    const body = req.body
    
   
    if (!body.id || !body.location || !body.mascot || !body.abbreviation || !body.conference || !body.division) {
        res.status(400).send('The following attributes are required: location, mascot, abbreviation, conference, division')
    }
  
    const newTeam = await models.teams.create(body) 
    res.status(201).send(body)
    
})
    
    app.listen(1338, () => {
        console.log(`Listening on 1338`)
    })
