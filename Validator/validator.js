const {body} = require("express-validator")

module.exports = {
    validateNewUser: () => {
        return [
            body('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10, max: 30 }),
            body('name', 'Name length should be 10 to 20 characters').isLength({ min: 10, max: 20 }),
            body('mobile', 'Mobile number should contains 10 digits').isLength({ min: 10, max: 10 }),
        ]
    }
}