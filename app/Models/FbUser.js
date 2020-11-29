'use strict'

const BaseModel = require('./BaseModel')

class FbUser extends BaseModel {
    static get tableName() {
        return 'fb_users'
    }
}
module.exports = FbUser