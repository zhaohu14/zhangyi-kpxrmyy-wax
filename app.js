// app.js
const {
  queryUser
} = require('./utils/API')
App({
  globalData: {
    cardInfo: null,
    isLogin: false,
    BASE_URL: 'https://kpxrmyy.sunyotas.com',
    token: null,
    OpenId: null,
    cardList: []
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // this.login()
    wx.setStorageSync('hasLogin', false)
    setTimeout(() => {
      getApp().globalData.login = this.login
      wx.setStorageSync('hasLogin', true)
    }, 500)
    // getApp().globalData.login = this.login
  },
  login (that) {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        queryUser({
          AuthCode: res.code
        }).then(ret => {
          if (ret.Code !== 1) {
            return wx.showModal({
              title: '请求错误',
              content: ret.Msg,
              showCancel: false
            })
          }
          getApp().globalData.OpenId = ret.Data.OpenId
          getApp().globalData.cardInfo = ret.Data.Users[0]
          getApp().globalData.cardList = ret.Data.Users
          if (that) {
            that.setData({
              cardInfo: getApp().globalData.cardInfo
            })
          }
          
        })
      }
    })
  },

})