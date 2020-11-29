'use strict'

const { get } = require('lodash')

class Handler
{
    constructor() {
        this.render = this.render.bind(this)
        this.renderForRest = this.renderForRest.bind(this)
    }

    render(error, req, res, next) {
        if (req.accepts('json')) {
            let bag = get(error, 'bag', {})
            bag.message = bag.message || 'Something went wrong! Please try again later'
            bag.data = bag.data || {}    
            return res.error(bag, error.status)
        }

        return res.error(error, error.status)
    }

    renderForRest(error, req, res, next) {
        console.log('------------- Some Error Occured -------')
        // console.log(error)
        let bag = get(error, 'bag', {})
        bag.message = bag.message || 'Something went wrong! Please try again later'
        bag.data = bag.data || {}

        return res.error(bag, error.status)
    }
}

module.exports = Handler