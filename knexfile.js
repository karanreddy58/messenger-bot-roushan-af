let { get } = require('lodash')
let config = require('./config')

let connection = config('db.connection')
let driverData = config(`db.connections.${connection}`)

module.exports = {
    client: get(driverData, 'driver'),
    debug: config('app.debug'),
    connection: {
        host: get(driverData, 'host'),
        port: config(`db.connections.${connection}.port`),
        user: config(`db.connections.${connection}.user`),
        password: config(`db.connections.${connection}.password`),
        database: config(`db.connections.${connection}.database`),
        charset: config(`db.connections.${connection}.charset`),
    },
    migrations: {
        directory: __dirname + '/database/migrations',
    },
    seeds: {
        directory: __dirname + '/database/seeders',
    }
}