// menzhen/yuyueDetail/yuyueDetail.js
const barcode = require('../../utils/barcode')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      code: '123456789'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      console.log(barcode)
      barcode.code128(wx.createCanvasContext('barCode'), '65626461463103', 340, 80)
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