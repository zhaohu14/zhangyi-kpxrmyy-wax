// menzhen/recharge/recharge.js
const {
  iPChgPre
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: '100',
    type: '',
    cardInfo: null,
    showZy: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.type === 'zy') {
        wx.setNavigationBarTitle({
          title: '住院预缴'
        })
    } else {
      wx.setNavigationBarTitle({
          title: '门诊充值'
        })
    }
    this.setData({
      type: options.type
    })
  },
  changeMoneyInput (e) {
    console.log(e)
    this.setData({
      money: e.detail.value
    })
  },
  swichSuccess(e) {
    console.log(e)
    this.setData({
      cardInfo: e.detail
    })
    getApp().globalData.cardInfo = e.detail
    if (this.data.type === 'zy') {
      this.setData({
        showZy: false
      })
      this.setData({
        showZy: true
      })
    }
  },
  changeMoney (e) {
    this.setData({
      money: e.currentTarget.dataset.money
    })
  },
  toPay () {
    let zyInfo = getApp().globalData.zyInfo
    wx.showModal({
      title: '确认支付',
      content: `请确认一下信息是否准确，姓名：${zyInfo.Name},住院号：${zyInfo.IPatId}, 充值金额：${this.data.money}。确认无误请点击继续充值`,
      confirmText: '继续充值',
      cancelText: '取消充值',
      success: e => {
        if (e.confirm) {
          if (this.data.type === 'zy') {
            this.zyPay()
          } else {
            this.mzPay()
          }
        }
      }
    })
    
  },
  zyPay () {
    const ReqId = 'ZYCZ-' + getApp().globalData.zyInfo.IPatId + '-' + new Date().getTime()
    const cardInfo = getApp().globalData.cardInfo
    const zyInfo = getApp().globalData.zyInfo
    const OpenId = getApp().globalData.OpenId
    iPChgPre({
      ReqId: ReqId,
      OpenId: OpenId,
      PatId: cardInfo.PatId,
      IPatId: zyInfo.IPatId,
      Amount: this.data.money
    }).then(ret => {
      if (ret.Code !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
    })
  },
  mzPay () {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      showZy: false
    })
    this.setData({
      cardInfo: getApp().globalData.cardInfo,
      showZy: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})