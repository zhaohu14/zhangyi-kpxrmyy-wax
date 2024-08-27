// menzhen/addErhcCard/addErhcCard.js
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
        showPicker: false,
        pickerType: null,
        pickerList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
        this.pickerCancel()
    },
    nationChange(e) {
        this.setData({
            nation: e.value,
            nationCode: e.code
        })
    },
    idCardChange (e) {
        this.setData({
            idCardType: e.value,
            idCardCode: e.code
        })
    },
    submitFunc () {
        getApp().globalData.isLogin = true
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