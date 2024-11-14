// index.js

Page({
  data: {
    mzList: [
        // {
        //     title: '绑卡',
        //     icon: '',
        //     url: '/menzhen/addErhcCard/addErhcCard',
        //     id: 0
        // },
        // {
        //     title: '预约挂号',
        //     icon: '',
        //     url: '/menzhen/ksList/ksList',
        //     id: 3
        // },
        {
            title: '一卡通充值',
            icon: '../../static/home/11.png',
            url: '/menzhen/recharge/recharge',
            id: 11
        },
        {
            title: '药品查询',
            icon: '../../static/home/12.png',
            url: '',
            id: 12
        },
        {
            title: '材料查询',
            icon: '../../static/home/13.png',
            url: '',
            id: 13
        },
        {
            title: '缴费记录',
            icon: '../../static/home/14.png',
            url: '',
            id: 14
        },
        {
            title: '电子发票开具',
            icon: '../../static/home/15.png',
            url: '',
            id: 15
        },
        {
            title: '电子发票查询',
            icon: '../../static/home/16.png',
            url: '',
            id: 16
        },
        
    ],
    zyList: [
        {
            title: '住院费用\n预缴',
            icon: '../../static/home/21.png',
            url: '',
            id: 21
        },
        {
            title: '住院一日\n清单查询',
            icon: '../../static/home/22.png',
            url: '',
            id: 22
        },
        {
            title: '住院账单\n查询',
            icon: '../../static/home/23.png',
            url: '',
            id: 23
        },
        {
            title: '住院缴费\n记录查询',
            icon: '../../static/home/24.png',
            url: '',
            id: 24
        },
        {
            title: '住院结算\n电子发票',
            icon: '../../static/home/25.png',
            url: '',
            id: 25
        }
    ],
    pdhzList: [
        {
            title: '门诊候诊',
            icon: '../../static/home/31.png',
            url: '',
            id: 31
        },
        {
            title: '检查排队\n取药排队',
            icon: '../../static/home/32.png',
            url: '',
            id: 31
        },
    ],
    cardInfo: null
  },
  onLoad () {
  },
  onShow () {
      this.setData({
        cardInfo: getApp().globalData.cardInfo
      })
  },
  toPage (e) {
      const dataset = e.currentTarget.dataset
      if (dataset.type === 'mz') {
          return this.toMzPage(dataset.item)
      }
      if (dataset.type === 'zy') {
        return this.toZyPage(dataset.item)
    }
  },
  toReports () {
    wx.navigateTo({
      url: '/menzhen/reports/reports',
    })
  },
  toYYGH (e) {
      console.log(e)
      let url = '/menzhen/ksList/ksList?type=' + e.currentTarget.dataset.type
      let item = {}
      item.url = url
      this.toMzPage(item)
  },
  toMzPage (item) {
      /* 需要先判断登录状态和绑卡状态后继续执行方法 */
      if (!item.url.length) {
          return wx.showToast({
            title: '暂未开放',
            icon: 'none'
          })
      }
      wx.navigateTo({
        url: item.url,
      })
  },
  toPayFee () {
      wx.navigateTo({
        url: '/menzhen/payFee/payFee',
      })
  },
})
