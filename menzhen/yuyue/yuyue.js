// menzhen/yuyue/yuyue.js
const {
    lastTime
} = require('../../utils/util')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dates: [],
        deptCode: null,
        deptName: null,
        selectDate: '',
        paibanList: [
            {
                date: '2024-09-10',
                ampm: '上午',
                type: '门诊',
                hy: 42
            },
            {
                date: '2024-09-10',
                ampm: '下午',
                type: '门诊',
                hy: 40
            }
        ],
        showDetail: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getTimeList(7)
    },
    getTimeList(days) {
        this.setData({
            dates: lastTime(days),
            selectDate: lastTime(days)[0].time
        })
    },
    changeTimes(e) {
        const item = e.currentTarget.dataset.item
        this.setData({
            selectDate: item.time
        })
    },
    paibanTap (e) {
        this.setData({
            showDetail: true
        })
    },
    cancle () {
        this.setData({
            showDetail: false
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