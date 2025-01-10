// menzhen/priceInquiry/priceInquiry.js
const {
  queryPrice
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PageSize: 20,
    Page: 1,
    QryType: 1,
    list: [],
    KeyWords: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.type === 'materials') {
      wx.setNavigationBarTitle({
        title: '材料查询'
      })
      this.setData({
        QryType: 2
      })
    } else {
      wx.setNavigationBarTitle({
        title: '药品查询'
      })
      this.setData({
        QryType: 1
      })
    }
    this.getList()
  },
  getList() {
    queryPrice({
      Page: this.data.Page,
      PageSize: this.data.PageSize,
      QryType: this.data.QryType,
      KeyWords: this.data.KeyWords
    }).then(ret => {
      console.log(ret)
      if (ret.Code !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      let arr = JSON.parse(JSON.stringify(this.data.list))
      arr = [...arr, ...ret.Data.Items]
      this.setData({
        list: arr
      })

    })
  },
  changeKey (e) {
    console.log(e.detail)
    this.setData({
      KeyWords: e.detail,
      list: [],
      Page: 0
    })
    this.getList()
  },
  addList() {
    this.setData({
      Page: this.data.Page + 1
    })
    this.getList()
  },
  toDetail(e) {
    wx.setStorageSync('priceItem', e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '/menzhen/priceInquiryDetail/priceInquiryDetail',
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