// menzhen/paymentRecord/paymentRecord.js
const {
  queryPayHistory
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime: null,
    endTime: null,
    cardInfo: null,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      cardInfo: getApp().globalData.cardInfo
    })
    this.getList()
  },
  getList () {
    this.setData({
      list: []
    })
    queryPayHistory({
      OpenId: getApp().globalData.OpenId,
      PatId: this.data.cardInfo.PatId
    }).then(ret => {
      if (ret.Code !== 1) {
        wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      let arr = []
      ret.Data.Pays.forEach(res => {
        res.Dtls.forEach(e => {
          e.Dpt = res.Dpt
          e.Dr = res.Dr
          e.Time = res.Time
          e.totalAmount = Number(e.Prc) * Number(e.Qty)
          arr.push(e)
        })
      })
      this.setData({
        list: arr
      })
    })
  },
  swichSuccess(e) {
    console.log(e)
    this.setData({
      cardInfo: e.detail
    })
    getApp().globalData.cardInfo = e.detail
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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