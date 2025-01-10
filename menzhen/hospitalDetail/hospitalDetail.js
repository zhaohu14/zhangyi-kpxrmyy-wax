// menzhen/hospitalDetail/hospitalDetail.js
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
    this.getYyInfo()
  },
  getYyInfo () {
    queryInfo({
      QueryType: '3'
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
  toBody (e) {
    console.log(e.currentTarget.dataset.id)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/showBody/showBody?id=' + id,
    })
  },
  startPhone () {
      wx.makePhoneCall({
        phoneNumber: '0990-123456',
      })
  },
  chooseLocation() {
      wx.openLocation({
        latitude: 40.506536,
        longitude: 79.046808,
        name: "柯坪县人民医院",
        scale: 28
      })
  },
  toYYJJ () {
      wx.navigateTo({
        url: '/menzhen/hospitalJS/hospitalJS',
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