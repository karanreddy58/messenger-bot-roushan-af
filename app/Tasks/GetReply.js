'use strict'

const moment = require('moment')

class GetReply {
    constructor() {

    }

    handle(user, action) {
        action = this.evaluateAction(user, action)
        let lang = this.getLang(user)

        if (action == 'START_OVER') { action = 'GET_STARTED' } 

        return lang[action]
    }

    evaluateAction(user, action) {
        if (!user) { return action; }
        
        let last_message_at = moment(user.last_message_at)
        console.log(last_message_at)
        let time_diff = moment().diff(last_message_at, 'hours')
        console.log('should refresh action', time_diff)
        return time_diff > 1 ? 'START_OVER' : action;
    }

    getLang(user) {
        let lang = user ? user.lang_preference : 'en'
        lang = lang ? lang : 'en'
        return require(`../../resources/lang/${lang}`)        
    }
}

module.exports = GetReply