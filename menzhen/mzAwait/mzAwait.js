// menzhen/mzAwait/mzAwait.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
            dept: '皮肤科',
            time: '2023-04-30 上午',
            dqhx: '5',
            myh: '9',
            awitNumber: '4',
            type: '门诊候诊'
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if (options.type === '门诊候诊') {
            wx.setNavigationBarTitle({
                title: '门诊候诊'
            })
            
        } else {
            wx.setNavigationBarTitle({
                title: '检查/取药候诊'
            })
            this.setData({
                list: [
                    {
                        dept: '一楼药房',
                        time: '2023-04-30 上午',
                        dqhx: '5',
                        myh: '9',
                        awitNumber: '4',
                        type: '取药候诊'
                    },
                    {
                        dept: '二楼ct室',
                        time: '2023-04-30 上午',
                        dqhx: '5',
                        myh: '9',
                        awitNumber: '4',
                        type: 'ct胸片'
                    }
                ]
            })
        }
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