// menzhen/payFeeDetail/payFeeDetail.js
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
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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