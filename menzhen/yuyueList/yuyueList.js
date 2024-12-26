// menzhen/yuyueList/yuyueList.js
const {
  getReged
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    getReged({
      PatId: this.data.cardInfo.PatId,
      OpenId: getApp().globalData.OpenId
    }).then(ret => {
      if (ret.Code !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      this.setData({
        list: ret.Data.Regs
      })
    })
  },
  toyyjfDetail (e) {
    // console.log(e.currentTarget.dataset.item)
    wx.setStorageSync('yuyueHistoryRows', e.currentTarget.dataset.item)
    // return
      wx.navigateTo({
        url: '/menzhen/yuyueDetail/yuyueDetail',
      })
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