// menzhen/cardDetail/cardDetail.js
import drawQrcode from '../../utils/qrcode'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      showEwm: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.creatEWM('654225199806182514')
  },
  creatEWM (value) {
    this.setData({
        showEwm: false
    })
    drawQrcode({
        width: 204,
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