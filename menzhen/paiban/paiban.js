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
        selectDate: ''
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