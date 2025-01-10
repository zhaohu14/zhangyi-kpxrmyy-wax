// compents/userCard/userCard.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    cardInfo: {
      type: Object,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    cardList: getApp().globalData.cardList
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCard(e) {
      console.log(e.detail.value)
      getApp().globalData.cardInfo = this.data.cardList[e.detail.value]
      this.triggerEvent('swichSuccess', this.data.cardList[e.detail.value])
    }
  },
  created () {
    console.log(this.cardInfo)
  }
})