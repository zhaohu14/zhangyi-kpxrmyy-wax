const {
  requestByHeader
} = require('./network')
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
  },
  bindUser: data => { // 添加就诊人
    return requestByHeader('/Web/BindUser', data, 'POST')
  },
  querySche: data => { // 查询排班
    return requestByHeader('/Web/QrySche', data, 'POST')
  },
  regApi: data => { // 挂号
    return requestByHeader('/Web/Reg', data, 'POST')
  },
  getReged: data => { // 挂号记录
    return requestByHeader('/Web/GetReged', data, 'POST')
  }



}