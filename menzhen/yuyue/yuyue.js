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
        showDetail: false,
        showTimeDetail: false,
        timeList: [
            {
                time: '10:00 - 11:00',
                select: true
            },
            {
                time: '11:00 - 12:00',
                select: false
            },
            {
                time: '12:00 - 13:00',
                select: false
            },
            {
                time: '12:00 - 13:00',
                select: false
            },
            {
                time: '12:00 - 13:00',
                select: false
            },
            {
                time: '12:00 - 13:00',
                select: false
            },
            {
                time: '12:00 - 13:00',
                select: false
            },
            {
                time: '12:00 - 13:00',
                select: false
            }
        ],
        selectTime: null
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
            showDetail: false,
            selectTime: null
        })
    },
    showSelectTimes () {
        this.setData({
            showTimeDetail: true
        })
    },
    changSelectTimes (e) {
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
    cancelTimeSelect () {
        this.setData({
            showTimeDetail: false
        })
    },
    confrimTime() {
        /* 选中处理*/
        let timeList = this.data.timeList
        let selectTime = null
        timeList.forEach(ret => {
            if (ret.select) {
                selectTime = ret.time
            }
        })
        this.setData({
            selectTime,
            showTimeDetail: false
        })
        /* 接口逻辑完成后，跳转预约详情页面 */
        // wx.navigateTo({
        //   url: '/menzhen/yuyueDetail/yuyueDetail',
        // })
    },
    confirmYuYue () {
        if (!this.data.selectTime) {
            return wx.showModal({
                title: '温馨提示',
                content: '请选择就诊时间',
                showCancel: false,
                confirmText: '我已知晓'
            })
        }
        /* 确认挂号调用接口后跳转预约详情页面 */
        wx.navigateTo({
          url: '/menzhen/yuyueDetail/yuyueDetail',
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