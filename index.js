'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express().use(bodyParser.json())

app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

const RequestMiddleware = require('./app/Middlewares/RequestMiddleware')
const ResponseMiddleware = require('./app/Middlewares/ResponseMiddleware')

app.use(RequestMiddleware.handle)
app.use(ResponseMiddleware.handle)

app.use(require('./routes'))

const ErrorHandler = require('./app/Errors/Handler')
const errorHandler = new ErrorHandler
app.use(errorHandler.render)

const config = require('./config')
console.log(config('services'))