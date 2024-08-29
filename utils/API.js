const { requestByHeader } = require('./network')
module.exports = {
    login: data => {
        return requestByHeader('/api/login', data, 'GET')
    },
    indexedSubject: data => {
        return requestByHeader('/open/paiban/indexedSubject', data, 'GET')
    },
    paibanDoctor: data => {
        return requestByHeader('/open/paiban/doctor', data, 'GET')
    }
    
}