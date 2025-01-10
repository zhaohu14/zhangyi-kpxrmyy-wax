// pages/showBody/showBody.js
const {
  queryInfo
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.id === '1') {
      wx.setNavigationBarTitle({
        title: '医院介绍'
      })
    }
    if (options.id === '2') {
      wx.setNavigationBarTitle({
        title: '科室介绍'
      })
    }
    if (options.id === '3') {
      wx.setNavigationBarTitle({
        title: '医生介绍'
      })
    }
    this.getInfo(options.id)
  },
  getInfo (id) {
    queryInfo({
      IntroType: id
    }).then(ret => {
      if (ret.Code !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      if (ret.Data.length === 0) {
        return wx.showModal({
          title: '温馨提示',
          content: '暂无内容',
          showCancel: false,
          confirmText: '上一页',
          success: () => {
            wx.navigateBack()
          }
        })
      }
      this.setData({
        bodyContent: ret.Data
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