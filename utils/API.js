const network = require('./network')

module.exports = {
    login: data => {
        return network('/api/login', data, 'GET')
    }
}