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
  },
  unbindUser: data => { // 挂号记录
    return requestByHeader('/Web/UnbindUser', data, 'POST')
  },
  qryZyUserInfo: data => { // 查询住院查询历史记录
    return requestByHeader('/Web/QryUserInfo', data, 'POST')
  },
  queryZyInfo: data => { // 查询住院查询历史记录
    return requestByHeader('/Web/QryIPat', data, 'POST')
  },
  pushUserInfo: data => { // 推送住院查询信息
    return requestByHeader('/Web/PushUserInfo', data, 'POST')
  },
  iPChgPre: data => { // 住院预充值
    return requestByHeader('/Web/IPChgPre', data, 'POST')
  },
  queryPacsList: data => { // 查询pacs报告
    return requestByHeader('/Web/QryPacsRpt', data, 'POST')
  },
  queryPayIng: data => { // 查询待缴费记录
    return requestByHeader('/Web/QryPaying', data, 'POST')
  },
  payPre: data => { // 缴费预处理
    return requestByHeader('/Web/PayPre', data, 'POST')
  },
  queryPayStates: data => { // 缴费支付查询
    return requestByHeader('/Web/PaySts', data, 'POST')
  },
  queryPayHistory: data => { // 缴费记录查询
    return requestByHeader('/Web/GetPayed', data, 'POST')
  },
  getQrCode: data => { // 电子健康卡展码
    return requestByHeader('/Web/ECHealth_RegOrGet', data, 'POST')
  },
  queryInfo: data => { // 获取信息介绍
    return requestByHeader('/api/Kiosk/Intro_Qry', data, 'POST')
  },
  queryZyFee: data => { // 获取住院清单
    return requestByHeader('/Web/QryIPFeeDtl', data, 'POST')
  },
  queryCheckList: data => { // 获取住院充值记录
    return requestByHeader('/Web/QryIPChargeRecord', data, 'POST')
  },
  
  
  
  
  
  
  
  
  
  



}