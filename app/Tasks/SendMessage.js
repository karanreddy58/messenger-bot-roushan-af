'use strict'

const config = require('../../config')
const axios = require('axios')

class SendMessage {
    constructor() {
        this.axios = new axios()
        this.url = `${config('services.fb.url')}?access_token=${config('services.fb.token')}`
    }

    async sendAction(sender, action) {
        return axios.post(this.url, {
            recipient: {
                id: sender,
            },
            sender_action: action,
        })
    }

    handle(sender, message) {
        axios.post(
            `${config('services.fb.url')}?access_token=${config('services.fb.token')}`,
        {
            recipient: {
                id: sender
            },
            messaging_type: 'RESPONSE',
            message
        })
        .then(res => {
            console.log('RESPONSE FROM WEBHOOK')
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }
}

module.exports = SendMessage