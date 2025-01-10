// menzhen/reports/reports.js
const {
  queryPacsList
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '0',
    cardInfo: null,
    pacsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      cardInfo: getApp().globalData.cardInfo
    })
    this.getPacsList()
  },
  swichSuccess(e) {
    console.log(e)
    this.setData({
      cardInfo: e.detail,
      pacsList: []
    })
    getApp().globalData.cardInfo = e.detail
    this.getPacsList()
  },
  getPacsList () {
    const AdmId = 'QUERY-' + this.data.cardInfo.PatId + '-' + new Date().getTime()
    queryPacsList({
      OpenId: getApp().globalData.OpenId,
      PatId: this.data.cardInfo.PatId,
      AdmId: AdmId,
      IDNo: this.data.cardInfo.IdNo
    }).then(ret => {
      if (ret.Code !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      this.setData({
        pacsList: ret.Data.Rpts
      })
    })
  },
  changeTypeFunc (e) {
    this.setData({
      type: e.currentTarget.dataset.type
    })
  },
  seeDetail (e) {
    // console.log(e.currentTarget.dataset.item)
    const item = e.currentTarget.dataset.item
    var fs = wx.getFileSystemManager()
    fs.writeFile({
      filePath: wx.env.USER_DATA_PATH + "/" + item.RptName + item.RptId + '.pdf',
      data: wx.base64ToArrayBuffer(item.B64.replace(/[\r\n]/g, "")),
      success:res =>{
        console.log(res)
        wx.openDocument({
          filePath: wx.env.USER_DATA_PATH + "/" + item.RptName + item.RptId +'.pdf',
          success: function (res) {
            console.log('打开PDF成功');
          }, fail(err) {
            console.log(err)
          }
        })
      }
    })

  },
  toDetail () {
    wx.navigateTo({
      url: '/menzhen/reportDetail/reportDetail',
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