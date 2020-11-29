const knexfile = require('../knexfile')
const Knex = require('knex')

module.exports = Knex(knexfile)