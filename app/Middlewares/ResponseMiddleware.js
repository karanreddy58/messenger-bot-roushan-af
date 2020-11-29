'use strict'

class ResponseMiddleware {
    static handle(req, res, next) {
        res.success = function(data, status=200) {
            return res.json({
                success: true,
                code: status,
                data,
            })  
        }

        res.error = function(error, status=401) {
            return res.status(status).json({
                success: false,
                message: error.message,
                error: error.data || {}
            })
        }

        next()
    }
}

module.exports = ResponseMiddleware