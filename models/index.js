const Sequelize = require('sequelize')
const Express = require('express')
const allConfigs = require('../config/sequelize')
const TeamModels = require('.teams')
const Op = require('sequelize').Op

const config = allConfigs['development']
const connection = new Sequelize(config.database, config.username, config.password, 
    {
        host: config.host,
        dialect: config.dialect,
    })
    const Teams = TeamModels(connection, Sequelize)


    module.exports = { 
        Teams,
    } 
    exports.TeamModel = require('./teams.js')