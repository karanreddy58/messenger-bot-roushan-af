const express = require('express')
const router = express.Router()
const WebhookController = require('../app/Controllers/WebhookController')
const webhooks = new WebhookController

router.get('/webhook', webhooks.get)
router.post('/webhook', webhooks.post)

module.exports = router