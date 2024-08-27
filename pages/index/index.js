// index.js

Page({
  data: {
    mzList: [
        {
            title: '绑卡',
            icon: '',
            url: '/menzhen/addErhcCard/addErhcCard',
            id: 0
        },
        {
            title: '门诊缴费',
            icon: '',
            url: '',
            id: 1
        },
        {
            title: '门诊日清单',
            icon: '',
            url: '',
            id: 2
        },
        {
            title: '预约挂号',
            icon: '',
            url: '/menzhen/ksList/ksList',
            id: 3
        },
        {
            title: '预约退号',
            icon: '',
            url: '',
            id: 4
        },
        {
            title: '检验报告',
            icon: '',
            url: '',
            id: 5
        },
        {
            title: '检查报告',
            icon: '',
            url: '',
            id: 6
        },
        {
            title: '自助开单',
            icon: '',
            url: '',
            id: 7
        },
    ],
    zyList: [
        {
            title: '住院预存',
            icon: '',
            url: '',
            id: 10
        },
        {
            title: '住院预存记录',
            icon: '',
            url: '',
            id: 11
        },
        {
            title: '住院清单',
            icon: '',
            url: '',
            id: 12
        },
    ],
    tjList: [
        {
            title: '体检预约',
            icon: '',
            url: '',
            id: 13
        },
        {
            title: '体检报告',
            icon: '',
            url: '',
            id: 14
        }
    ],
    ksjsList: [
        {
            title: '科室介绍',
            icon: '',
            url: '',
            id: 15
        },
        {
            title: '医生介绍',
            icon: '',
            url: '',
            id: 16
        },
    ]
  },
  onLoad () {},
  onShow () {
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
  }
})
