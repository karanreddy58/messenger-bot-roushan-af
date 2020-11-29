'use strict'

const WebhookService = require('../Services/WebhookService')

class WebhookController {
    constructor() {
        this.service = new WebhookService
    }

    get = async (req, res) => {
        // Your verify token. Should be a random string.
        let VERIFY_TOKEN = "webhook123"
            
        // Parse the query params
        let mode = req.query['hub.mode'];
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];
        
        // Checks if a token and mode is in the query string of the request
        if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            
            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        
        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);      
        }
        }
    }

    post = async (req, res) => {
        let inputs = req.inputs()
        await this.service.post(inputs)
        res.status(200).send('EVENT_RECEIVED');
    }
}

module.exports = WebhookController