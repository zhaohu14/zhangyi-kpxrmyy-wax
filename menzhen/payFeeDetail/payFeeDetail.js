// menzhen/payFeeDetail/payFeeDetail.js
const {
  payPre,
  queryPayStates
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList: [{
        name: '血栓通注射液',
        num: 1,
        price: 14.00,
        totalAmount: 14
      },
      {
        name: '一级护理',
        num: 1,
        price: 14.00,
        totalAmount: 14
      },
      {
        name: '一次性注射器',
        num: 1,
        price: 14.00,
        totalAmount: 14
      },
      {
        name: '血栓通注射液',
        num: 1,
        price: 14.00,
        totalAmount: 14
      },
      {
        name: '血栓通注射液',
        num: 1,
        price: 14.00,
        totalAmount: 14
      }
    ],
    cardInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      payIngItem: wx.getStorageSync('payIngItem'),
      cardInfo: getApp().globalData.cardInfo
    })
    console.log(1)
    this.dataEach()
  },
  payStart() {
    const ReqId = 'JF-' + this.data.cardInfo.PatId + '-' + new Date().getTime()
    payPre({
      OpenId: getApp().globalData.OpenId,
      ReqId: ReqId,
      PatId: this.data.cardInfo.PatId,
      AdmId: this.data.payIngItem.AdmId,
      PayWay: 1
    }).then(ret => {
      if (ret.Code !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      let payInfo = JSON.parse(ret.Data.PayStr)
      let obj = {
        timeStamp: payInfo.timeStamp,
        nonceStr: payInfo.nonceStr,
        package: payInfo.package,
        signType: payInfo.signType,
        paySign: payInfo.paySign,
      }
      console.log(obj, '====')
      wx.requestPayment({
        timeStamp: payInfo.timeStamp + '',
        nonceStr: payInfo.nonceStr,
        package: payInfo.package,
        signType: payInfo.signType,
        paySign: payInfo.paySign,
        success: res => {
          this.queryPayStatesA(ReqId, 0)
        },
        fail: err => {
          this.queryPayStatesA(ReqId, 0)
          console.log(err)
        }
      })

    })
  },
  queryPayStatesA(ReqId, index) {
    queryPayStates({
      OpenId: getApp().globalData.OpenId,
      PatId: this.data.cardInfo.PatId,
      ReqId: ReqId
      // ReqId: 'JF-509faaab6dc8d1816238-1736141165413'
    }).then(ret => {
      if (ret.Code !== 1) {
        if (index < 20) {
          wx.showLoading('查询中')
          setTimeout(() => {
            this.queryPayStatesA(ReqId, index + 1)
          }, 2000)
        } else {
          return wx.showModal({
            title: '请求错误',
            content: ret.Msg,
            showCancel: false
          })
        }
        return
      }
      wx.showModal({
        title: '温馨提示',
        content: '缴费成功',
        success: () => {
          wx.navigateBack({
            delta: 2
          })
        }
      })
    })
  },
  dataEach() {
    let Rps = this.data.payIngItem.Rps
    let arr = []
    Rps.forEach(ret => {
      ret.Dtls.forEach(e => {
        e.totalAmount = Number(e.Qty) * Number(e.Prc)
        arr.push(e)
      })
    })
    console.log(arr)
    this.setData({
      detailList: arr
    })

  },
  toYB() {
    wx.navigateToMiniProgram({
      // extraData: extraData,
      appId: 'wxe183cd55df4b4369',
      // path: 'pages/bindcard/bindcard3/main?openType=getAuthCode&cityCode=650100&channel=AAEV6oqx5us2u65cLzfySw3a&orgChnlCrtfCodg=BqK1kMStlhVDgN2uHf4EsLK/F2LjZPYJ81nK2eYQqxu9rpwUIHTBrf+C4kTCO8bn&orgCodg=H65010400049&bizType=04107&orgAppId=1GA86O34L04C3F60C80A0000E70CC7A8', // 测试路径
      path: 'pages/bindcard/bindcard3/main?openType=getAuthCode&cityCode=650100&channel=AAEV6oqx5us2u65cLzfySw3a&orgChnlCrtfCodg=BqK1kMStlhVDgN2uHf4EsLK/F2LjZPYJ81nK2eYQqxu9rpwUIHTBrf+C4kTCO8bn&orgCodg=H65010400049&bizType=04107&orgAppId=1GGF309UI04GE1470B0A000099419889', // 正式路径
      extraData: {
        foo: 'bar'
      },
      // envVersion:'trial',
      envVersion: 'release',
      success(res) {
        console.log(res, '打开成功')
      },
      fail(err) {
        console.log(err, '-----')
      }
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