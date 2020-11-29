'use strict'

const FbUser = require('../Models/FbUser')

class GetUser {
    static async handle(sender_id, lang) {
        if (!sender_id) {
            return null
        }
        
        let user = await FbUser.query().where('sender_id', sender_id).first()

        if (user) {
            if (lang) {
                await FbUser.query().where('sender_id', sender_id)
                    .patch({lang_preference: lang})              
            }
        } else {
            lang = lang ? lang : 'en'
            await FbUser.query().insert({
                sender_id: sender_id,
                lang_preference: lang,
            })
        }

        return await FbUser.query()
            .where('sender_id', sender_id)
            .first()
    }
}

module.exports = GetUser