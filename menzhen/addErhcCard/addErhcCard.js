// menzhen/addErhcCard/addErhcCard.js
const {
  getInfoFromId,
  nationList,
  matrimonyLsit,
  jobList
} = require('../../utils/util')
const {
  bindUser
} = require('../../utils/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    idCard: '',
    mobile: '',
    nation: '',
    nationCode: '',
    nationList: [{
        value: '汉族',
        code: '01'
      },
      {
        value: '维吾尔族',
        code: '02'
      }
    ],
    idCardType: '',
    idCardCode: '',
    idCardTypeList: [{
        value: '身份证',
        code: '01'
      },
      {
        value: '外国人永久居留证',
        code: '02'
      }
    ],
    matrimonyLsit: [],
    matrimony: '',
    matrimonyCode: '',
    showPicker: false,
    pickerType: null,
    pickerList: [],
    address: '',
    job: '',
    jobCode: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(getApp().globalData)
    this.setData({
      nationList: nationList.map(ret => {
        return {
          value: ret,
          code: '0'
        }
      }),
      matrimonyLsit: matrimonyLsit,
      jobList: jobList
    })
  },
  changeCode(e) {
    const code = e.currentTarget.dataset.code
    let obj = {}
    obj[code] = e.detail
    this.setData({
      ...obj
    })
  },
  changShowPicker(e) {
    const dataset = e.currentTarget.dataset
    this.setData({
      showPicker: !this.data.showPicker,
      pickerList: this.data[dataset.list],
      pickerType: dataset.type
    })
  },
  pickerCancel() {
    this.setData({
      pickerType: null,
      pickerList: [],
      showPicker: false
    })
  },
  pickerChange(e) {
    if (this.data.pickerType === 'nation') {
      this.nationChange(e.detail.value)
    }
    if (this.data.pickerType === 'idcard') {
      this.idCardChange(e.detail.value)
    }
    if (this.data.pickerType === 'matrimony') {
      this.matrimonyChange(e.detail.value)
    }
    if (this.data.pickerType === 'job') {
      this.jobChange(e.detail.value)
    }
    this.pickerCancel()
  },
  jobChange (e) {
    this.setData({
      job: e.value,
      jobCode: e.code
    })
  },
  matrimonyChange(e) {
    console.log(e)
    this.setData({
      matrimony: e.value,
      matrimonyCode: e.code
    })
  },
  nationChange(e) {
    this.setData({
      nation: e.value,
      nationCode: e.code
    })
  },
  idCardChange(e) {
    this.setData({
      idCardType: e.value,
      idCardCode: e.code
    })
  },
  submitFunc() {
    // getApp().globalData.isLogin = true
    if (!this.data.name.length) {
      return wx.showToast({
        title: '请填写姓名',
        icon: 'none'
      })
    }
    if (!this.data.idCard.length) {
      return wx.showToast({
        title: '请填写身份证号',
        icon: 'none'
      })
    }
    if (!this.data.mobile.length) {
      return wx.showToast({
        title: '请填写手机号',
        icon: 'none'
      })
    }
    if (!this.data.nation.length) {
      return wx.showToast({
        title: '请选择民族',
        icon: 'none'
      })
    }
    if (!this.data.matrimony.length) {
      return wx.showToast({
        title: '请选择婚姻状态',
        icon: 'none'
      })
    }
    if (!this.data.job.length) {
      return wx.showToast({
        title: '请选择工作种类',
        icon: 'none'
      })
    }
    if (!this.data.address.length) {
      return wx.showToast({
        title: '请填写住址',
        icon: 'none'
      })
    }
    let obj = {
      "OpenId": getApp().globalData.OpenId,
      "Rel": 0,
      "Name": this.data.name,
      "EnName": "",
      "Gender": getInfoFromId(this.data.idCard).sex === '男' ? '0' : '1',
      "IdNo": this.data.idCard,
      "IdType": 0,
      "DOB": getInfoFromId(this.data.idCard).birthDate,
      "Mobile": this.data.mobile,
      "Nation": this.data.nation,
      "Addr": this.data.address,
      "Job": this.data.jobCode,
      "Marriage": this.data.matrimonyCode
    }
    console.log(obj)
    bindUser({
      ...obj
    }).then(ret => {
      console.log(ret)
      if (ret.Code !== 1) {
        return wx.showModal({
          title: '请求错误',
          content: ret.Msg,
          showCancel: false
        })
      }
      wx.navigateBack()
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