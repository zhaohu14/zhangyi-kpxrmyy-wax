// app.js
const {
    queryUser
} = require('./utils/API')
App({
    globalData: {
        cardInfo: null,
        isLogin: false,
        BASE_URL: 'https://kpxrmyy.sunyotas.com',
        token: null
    },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        queryUser({
            AuthCode: res.code
        }).then(ret => {
            console.log(ret)
            if (res.Code !== 200) {
                    return wx.showModal({
                        title: '请求错误',
                        content: ret.Msg,
                        showCancel: false
                    })
            }
        })
      }
    })
  },
 
})
