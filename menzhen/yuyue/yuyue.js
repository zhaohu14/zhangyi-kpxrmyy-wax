// menzhen/yuyue/yuyue.js
const {
  lastTime
} = require('../../utils/util')
const {
  regApi
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates: [],
    deptCode: null,
    deptName: null,
    selectDate: '',
    paibanList: [],
    showDetail: false,
    showTimeDetail: false,
    timeList: [],
    selectTime: null,
    allPaiBai: [],
    selectPaiBan: null,
    cardInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let obj = getApp().globalData.cardInfo
    obj.patIdShow = obj.PatId[0] + '************' + obj.PatId[obj.PatId.length - 1]
    obj.NameShow = obj.Name.length > 2 ? obj.Name[0] + '*' + obj.Name[obj.Name.length - 1] : obj.Name[0] + '*'
    this.setData({
      cardInfo: obj
    })
    this.getTimeList(7)
  },
  getTimeList(days) {
    this.setData({
      dates: lastTime(days),
      selectDate: lastTime(days)[0].time
    })
    this.getPaibaiList()
  },
  getPaibaiList() {
    this.setData({
      allPaiBai: wx.getStorageSync('yuyueInfo')
    })
    wx.removeStorageSync('yuyueInfo')
    // let arr = []
    // this.data.allPaiBai.
    this.normalPaibai()
  },
  normalPaibai() {
    let arr = []
    let time = this.data.selectDate
    let paiban = this.data.allPaiBai.DrSches
    paiban.forEach(ret => {
      if (ret.ScheDate === time) {
        arr.push(ret)
      }
    })
    this.setData({
      paibanList: arr
    })
  },
  changeTimes(e) {
    const item = e.currentTarget.dataset.item
    this.setData({
      selectDate: item.time
    })
    this.normalPaibai()
  },
  paibanTap(e) {
    console.log(e.currentTarget.dataset.item)
    this.setData({
      showDetail: true,
      selectPaiBan: e.currentTarget.dataset.item
    })
  },
  cancle() {
    this.setData({
      showDetail: false,
      selectTime: null,
      timeList: [],
      selectPaiBan: null
    })
  },
  showSelectTimes() {
    if (this.data.timeList.length > 0) {
      return this.setData({
        showTimeDetail: true
      })
    }
    let arr = JSON.parse(JSON.stringify(this.data.selectPaiBan.TimeSegs))
    arr.forEach(ret => {
      ret.select = false
    })
    arr[0].select = true
    console.log(arr)
    this.setData({
      showTimeDetail: true,
      timeList: arr
    })

  },
  changSelectTimes(e) {
    const index = e.currentTarget.dataset.index
    let timeList = this.data.timeList
    timeList.forEach(ret => {
      ret.select = false
    })
    timeList[index].select = true
    this.setData({
      timeList
    })
  },
  cancelTimeSelect() {
    this.setData({
      showTimeDetail: false,
      timeList: []
    })
  },
  confrimTime() {
    /* 选中处理*/
    let timeList = this.data.timeList
    let selectTime = null
    timeList.forEach(ret => {
      if (ret.select) {
        selectTime = ret
      }
    })
    console.log(selectTime)
    this.setData({
      selectTime,
      showTimeDetail: false
    })
    /* 接口逻辑完成后，跳转预约详情页面 */
    // wx.navigateTo({
    //   url: '/menzhen/yuyueDetail/yuyueDetail',
    // })
  },
  confirmYuYue() {
    if (!this.data.selectTime) {
      return wx.showModal({
        title: '温馨提示',
        content: '请选择就诊时间',
        showCancel: false,
        confirmText: '我已知晓'
      })
    }
    /* 确认挂号调用接口后跳转预约详情页面 */
    regApi({
      ReqId: this.data.cardInfo.PatId + '-' + new Date().getTime(),
      OpenId: getApp().globalData.OpenId,
      PatId: this.data.cardInfo.PatId,
      AdmDate: this.data.selectPaiBan.ScheDate,
      DptId: this.data.allPaiBai.DptId,
      DrId: this.data.allPaiBai.DrCode,
      ScheId: this.data.selectPaiBan.ScheId,
      SegId: this.data.selectTime.Seq
    }).then(ret => {
      if (ret.Code !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      wx.reLaunch({
        url: '/menzhen/yuyueDetail/yuyueDetail',
      })
    })
    // wx.navigateTo({
    //   url: '/menzhen/yuyueDetail/yuyueDetail',
    // })
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