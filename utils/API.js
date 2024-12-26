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
    },
    queryUser: data => { // 查询病人信息
        return requestByHeader('/Web/QryUser', data, 'POST')
    },
    queryDpt: data => { // 查询科室列表
        return requestByHeader('/Web/QryDpt', data, 'POST')
    },
    queryPrice: data => { // 物价查询
        return requestByHeader('/Web/QryPrice', data, 'POST')
    }
    
}