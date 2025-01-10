// menzhen/addZyNo/addZyNo.js
const {
  queryZyInfo,
  pushUserInfo
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhuyuanNo: '',
    cardInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      cardInfo: getApp().globalData.cardInfo
    })
  },
  change(e) {
    console.log(e.detail)
    this.setData({
      zhuyuanNo: e.detail
    })
  },
  swichSuccess(e) {
    console.log(e.detail)
    this.setData({
      cardInfo: e.detail
    })
    getApp().globalData.cardInfo = e.detail
  },
  getInfo() {
    queryZyInfo({
      OpenId: getApp().globalData.OpenId,
      PatId: getApp().globalData.cardInfo.PatId,
      IPatId: this.data.zhuyuanNo
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
      wx.navigateBack()
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