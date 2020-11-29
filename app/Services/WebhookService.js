'use strict'

const moment = require('moment')
const { get } = require('lodash')
const FbUser = require('../Models/FbUser')
const GetReply = require('../Tasks/GetReply')
const GetUser = require('../Tasks/GetUser')
const SendMessage = require('../Tasks/SendMessage')

class WebhookService {
    constructor() {
        this.sender = new SendMessage
    }

    get(inputs) {

    }

    post = async (inputs) => {
        if (inputs.object === 'page') {
            for (let entry of inputs.entry) {
                let webhook_event = entry.messaging[0];
                
                this.sender.sendAction(webhook_event.sender.id, 'typing_on')

                let payload = 'START'
                if (webhook_event.postback) {
                    payload = get(webhook_event, 'postback.payload', 'START')
                } else if (webhook_event.message) {
                    payload = get(webhook_event, 'message.quick_reply.payload')
                }

                if (!payload) {
                    payload = 'THANK_YOU'
                }

                let message = undefined
                payload = payload.split('|')
                
                let user = await GetUser.handle(webhook_event.sender.id, payload[1])
                if (payload) {
                    message = (new GetReply).handle(user, payload[0])
                }

                this.sender.sendAction(webhook_event.sender.id, 'typing_off')
                
                if (user) {
                    await FbUser.query().where('sender_id', user.sender_id)
                        .patch({last_message_at: moment().format('YYYY-MM-DD HH:mm:ss')}) 
                }
                if (message) {
                    let sendMessage = new SendMessage
                    sendMessage.handle(webhook_event.sender.id, message)
                }
            } 

            return 'EVENT_RECEIVED'
        } else {
            // Returns a '404 Not Found' if event is not from a page subscription
            res.sendStatus(404);
        }
    }
}

module.exports = WebhookService