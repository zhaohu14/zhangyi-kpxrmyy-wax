// pages/me/me.js
import drawQrcode from '../../utils/qrcode'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },
  onShow () {
    // console.log(getApp().globalData)
    // this.setData({
    //   cardInfo: getApp().globalData.cardInfo
    // })
    this.setData({
      cardInfo: getApp().globalData.cardInfo
    })
    // this.creatEWM(getApp().globalData.cardInfo.PatId)
  },
  creatEWM(value) {
    drawQrcode({
      width: 90,
      height: 90,
      canvasId: 'myQrcode',
      // ctx: wx.createCanvasContext('myQrcode'),
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
  },
  toCardDetail() {
    wx.setStorageSync('cardInfo', this.data.cardInfo)
    wx.navigateTo({
        url: '/menzhen/cardDetail/cardDetail',
    })
    // wx.navigateTo({
    //   url: '/menzhen/cardDetail/cardDetail',
    // })
  },
  toCardList() {
    wx.navigateTo({
      url: '/menzhen/cardList/cardList',
    })
  },
  toyyjl() {
    if (!this.data.cardInfo) {
      return wx.showModal({
        title: '温馨提示',
        content: '您暂未绑定就诊卡，是否去绑定就诊卡',
        confirmText: '去绑定',
        cancelText: '暂不绑定',
        success: res => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/menzhen/addErhcCard/addErhcCard',
            })
          }
        }
      })
    }
    wx.navigateTo({
      url: '/menzhen/yuyueList/yuyueList',
    })
  },
  toJfjl () {
    if (!this.data.cardInfo) {
      return wx.showModal({
        title: '温馨提示',
        content: '您暂未绑定就诊卡，是否去绑定就诊卡',
        confirmText: '去绑定',
        cancelText: '暂不绑定',
        success: res => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/menzhen/addErhcCard/addErhcCard',
            })
          }
        }
      })
    }
    wx.navigateTo({
      url: '/menzhen/paymentRecord/paymentRecord',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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