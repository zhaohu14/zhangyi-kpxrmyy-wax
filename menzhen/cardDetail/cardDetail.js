// menzhen/cardDetail/cardDetail.js
import drawQrcode from '../../utils/qrcode'
const {
  unbindUser,
  getQrCode
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      showEwm: false,
      cardInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({
        cardInfo: wx.getStorageSync('cardInfo')
      })
      wx.removeStorageSync('cardInfo')
      this.getCode()
      // this.creatEWM(this.data.cardInfo.PatId)
  },
  getCode () {
    getQrCode({
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
      this.creatEWM(ret.Data.QrCode) 
    })
  },
  creatEWM (value) {
    this.setData({
        showEwm: false
    })
    drawQrcode({
        width: 200,
        height: 204,
        canvasId: 'myQrcode',
        text: value,
        // v1.0.0+版本支持在二维码上绘制图片
        image: {
          imageResource: '',
          dx: 62.5,
          dy: 62.5,
          dWidth: 25,
          dHeight: 25
        }
    })
    this.setData({
        showEwm: true
    })
  },
  changeEwm () {
      console.log(1)
      this.creatEWM('123456')
  },
  removeCard () {
    wx.showModal({
      title: '温馨提示',
      content: '是否解绑该就诊卡',
      confirmText: '解绑',
      success: res => {
        if (res.confirm) {
          this.startRemove()
        }
      }
    })
  },
  startRemove () {
    unbindUser({
      OpenId: getApp().globalData.OpenId,
      PatId: this.data.cardInfo.PatId
    }).then(ret => {
      if (ret.Code  !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      wx.switchTab({
        url: '/pages/index/index'
      })
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