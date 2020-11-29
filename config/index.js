'use strict'
require('dotenv').config()
const { get } = require('lodash')

const config = {
    app: require('./app'),
    db: require('./database'),
    services: require('./services')
}

module.exports = function(key) {
    return get(config, key)
}