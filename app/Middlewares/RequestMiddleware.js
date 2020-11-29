'use strict'

class RequestMiddleware {
    static handle(req, res, next) {
        req.inputs = function() {
            return {
                ...req.params,
                ...req.body,
                ...req.query,
            }
        }

        next()
    }
}

module.exports = RequestMiddleware