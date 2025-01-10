// menzhen/payFee/payFee.js
const {
  queryPayIng
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime: null,
    endTime: null,
    selectListType: '0',
    payFeeList: [{
        itemName: '检验检测（耳鼻喉科）',
        dept: '耳鼻喉外科',
        doctor: '李医生',
        totalMoney: 99.99,
        time: '2024-09-19',
        select: false
      },
      {
        itemName: '检验检测（耳鼻喉科）',
        dept: '耳鼻喉外科',
        doctor: '李医生',
        totalMoney: 99.99,
        time: '2024-09-19',
        select: false
      },
      {
        itemName: '检验检测（耳鼻喉科）',
        dept: '耳鼻喉外科',
        doctor: '李医生',
        totalMoney: 99.99,
        time: '2024-09-19',
        select: false
      }
    ],
    totalMoney: 0,
    selectAll: false,
    cardInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.removeStorageSync('payIngItem')
    this.setData({
      cardInfo: getApp().globalData.cardInfo
    })
    this.getList()
  },
  swichSuccess(e) {
    console.log(e)
    this.setData({
      cardInfo: e.detail
    })
    this.getList()
  },
  getList() {
    this.setData({
      payFeeList: []
    })
    queryPayIng({
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
      // totalMoney
      ret.Data.Adms.forEach(res => {
        let totalMoney = 0
        res.Rps.forEach(e => {
          totalMoney = totalMoney + Number(e.Amt)
        })
        console.log(totalMoney)
        res.totalMoney = totalMoney.toFixed(2)
      })
      this.setData({
        payFeeList: ret.Data.Adms
      })
    })
  },
  changeTime(e) {
    console.log(e.currentTarget.dataset.type)
    const type = e.currentTarget.dataset.type
    let obj = {}
    obj[type] = e.detail.value
    this.setData({
      ...obj
    })
  },
  changeType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({
      selectListType: type
    })
  },
  changeSelect(e) {
    const index = e.currentTarget.dataset.index
    let payFeeList = this.data.payFeeList
    payFeeList[index].select = !payFeeList[index].select
    this.setData({
      payFeeList,
      selectAll: false
    })
    this.computeMoney()
  },
  computeMoney() {
    let payFeeList = this.data.payFeeList
    let totalMoney = 0
    payFeeList.forEach(ret => {
      if (ret.select) {
        totalMoney = totalMoney + ret.totalMoney
      }
    })
    this.setData({
      totalMoney: totalMoney.toFixed(2)
    })
  },
  changAll() {
    this.setData({
      selectAll: !this.data.selectAll
    })
    let payFeeList = this.data.payFeeList
    payFeeList.forEach(ret => {
      ret.select = this.data.selectAll
    })
    this.setData({
      payFeeList
    })
    this.computeMoney()
  },
  toPayFeeDetail(e) {
    console.log(e)
    const item = e.currentTarget.dataset.item
    wx.setStorageSync('payIngItem', item)
    wx.navigateTo({
      url: '/menzhen/payFeeDetail/payFeeDetail',
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