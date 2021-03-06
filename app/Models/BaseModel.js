'use strict'

const { Model } = require('objection')
const knex = require('../../database/knex')

Model.knex(knex)

class BaseModel extends Model {
    static get useLimitInFirst() {
        return true;
    }
}

module.exports = BaseModel