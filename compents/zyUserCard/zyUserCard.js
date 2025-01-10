// compents/userCard/userCard.js
const {
  qryZyUserInfo,
  queryZyInfo,
  pushUserInfo
} = require('../../utils/API')
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    cardInfo: {
      type: Object,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    zyCardList: [],
    zyCardInfo: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCard(e) {
      console.log(e.detail.value)
      this.triggerEvent('swichSuccess', this.data.cardList[e.detail.value])
    },
    qryZyUserInfoA() {
      qryZyUserInfo({
        OpenId: getApp().globalData.OpenId,
        PatId: this.data.cardInfo.PatId
      }).then(ret => {
        if (ret.Code !== 1) {
          return wx.showModal({
            title: '请求错误',
            content: ret.Msg,
            showCancel: false
          })
        }
        if (ret.Data.UserInfo === '') {
          return wx.showModal({
            title: '温馨提示',
            content: '您暂未绑定过住院信息，请先绑定住院信息或切换就诊人',
            confirmText: '去绑定',
            success: res => {
              if (res.confirm) {
                wx.navigateTo({
                  url: '/menzhen/addZyNo/addZyNo',
                })
              } else {
                // wx.navigateBack()
              }
            }
          })
        }
        // getApp().globalData.zyInfo = JSON.parse(ret.Data.UserInfo)
        // this.setData({
        //   zyCardInfo: JSON.parse(ret.Data.UserInfo)
        // })
        this.getZhuYuanInfo(JSON.parse(ret.Data.UserInfo))
      })
    },
    getZhuYuanInfo (info) {
      queryZyInfo({
        OpenId: getApp().globalData.OpenId,
        PatId: getApp().globalData.cardInfo.PatId,
        IPatId: info.IPatId
      }).then(ret => {
        if (ret.Code !== 1) {
          wx.showModal({
            title: '请求错误',
            content: ret.Msg,
            showCancel: false
          })
          return
        }
        getApp().globalData.zyInfo = ret.Data
        this.pushInfo(ret.Data)
  
      })
    },
    pushInfo(info) {
      pushUserInfo({
        OpenId: getApp().globalData.OpenId,
        PatId: getApp().globalData.cardInfo.PatId,
        UserInfo: JSON.stringify(info)
      }).then(ret => {
        if (ret.Code !== 1) {
          return wx.showModal({
            title: '请求错误',
            content: ret.Msg
          })
        }
        getApp().globalData.zyInfo = info
        this.setData({
          zyCardInfo: info
        })
        // wx.navigateBack()
      })
    },
    toAddZy () {
      wx.navigateTo({
        url: '/menzhen/addZyNo/addZyNo',
      })
    }
  },
  created () {
    setTimeout(() => {
      console.log(this.data.cardInfo, '====')
      this.qryZyUserInfoA()
    }, 500)
    
    
  }
})