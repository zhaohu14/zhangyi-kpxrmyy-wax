// menzhen/paiban/paiban.js
const {
    lastTime
} = require('../../utils/util')
const {
    paibanDoctor
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
        doctorList: [
            {
                name: '赵虎',
                remake: `简介：医生，一般称临床医生。能够用科学或技术的手段来处理人
                类疾病，预防出生缺陷提高人口素质，治病救人改善病患人类生活
                质量，并以学习研究医学应用于临床为生的职业。通过定期临床理
                论考试，技能考核培训，能够熟练掌握必要的临床医学技能和`,
                sex: '女',
                title: '主治医生',
                hasH: true
            },
            {
                name: '刘医生',
                remake: `简介：医生，一般称临床医生。能够用科学或技术的手段来处理人
                类疾病，预防出生缺陷提高人口素质，治病救人改善病患人类生活
                质量，并以学习研究医学应用于临床为生的职业。通过定期临床理
                论考试，技能考核培训，能够熟练掌握必要的临床医学技能和`,
                sex: '女',
                title: '主治医生',
                hasH: false
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            deptCode: options.deptCode,
            deptName: options.name
        })
        wx.setNavigationBarTitle({
          title: options.name,
        })
        this.getTimeList(7)
    },
    getTimeList(days) {
        this.setData({
            dates: lastTime(days),
            selectDate: lastTime(days)[0].time
        })
    },
    getPaiban(e) {
        paibanDoctor({
            deptCode: this.data.deptCode,
            startDate: '',
            days: ''
        })
    },
    changeTimes(e) {
        const item = e.currentTarget.dataset.item
        this.setData({
            selectDate: item.time
        })
    },
    toDoctorDetail (e) {
        const item = e.currentTarget.dataset.item
        wx.setStorageSync('yuyueInfo', item)
        wx.navigateTo({
          url: '/menzhen/yuyue/yuyue',
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