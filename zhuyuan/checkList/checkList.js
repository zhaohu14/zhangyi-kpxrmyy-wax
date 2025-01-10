// zhuyuan/fee/fee.js
const {
  queryCheckList
} = require('../../utils/API')
Page({

    /**
     * 页面的初始数据
     */
    data: {
      showZy: false,
      list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    },
    swichSuccess(e) {+
      console.log(e)
      this.setData({
        cardInfo: e.detail,
        showZy: false
      })
      getApp().globalData.cardInfo = e.detail
      this.setData({
        showZy: true
      })
      setTimeout(() => {
        this.getList()
      }, 1000)
    },
    toDetail() {
        wx.navigateTo({
            url: '/zhuyuan/feeDetail/feeDetail',
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
      let date = new Date()
      let year = date.getUTCFullYear()
      let month = date.getMonth() + 1
      let day = date.getUTCDate()
      let time = year + '-' + (month < 10 ? '0' + month : month) + '-' + day
      this.setData({
        startTime: time
      })
      this.setData({
        showZy: false
      })
      this.setData({
        cardInfo: getApp().globalData.cardInfo,
        showZy: true
      })
      this.getList()
    },
    changeTime (e) {
      console.log(e.currentTarget.dataset.type)
      const type = e.currentTarget.dataset.type
      const date = e.detail.value
      this.setData({
        startTime: date
      })
      this.getList()
    },
    getList () {
      console.log(getApp().globalData.zyInfo, '===')
      if (!getApp().globalData.zyInfo) {
        console.log('暂无住院信息')
        return
      }
      console.log({
        OpenId: getApp().globalData.OpenId,
        PatId: this.data.cardInfo.PatId,
        InPatId: getApp().globalData.zyInfo.IPatId,
        Date: this.data.startTime
      })
      queryCheckList({
        OpenId: getApp().globalData.OpenId,
        PatId: this.data.cardInfo.PatId,
        InPatId: getApp().globalData.zyInfo.IPatId,
        Date: this.data.startTime
      }).then(ret => {
        if (ret.Code !== 1) {
          return wx.showModal({
            title: '请求错误',
            content: ret.Msg,
            showCancel: false
          })
        }
        this.setData({
          list: ret.Data
        })
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