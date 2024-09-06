// menzhen/ksList/ksList.js
const {
    indexedSubject
} = require('../../utils/API')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        typeList: [
            {
                name: '内科',
                children: [
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    }
                    
                    
                ]
            },
            {
                name: '外科',
                children: [
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    }
                    
                    
                ]
            },
            {
                name: '妇科',
                children: [
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '骨科'
                    },
                    {
                        name: '内分泌科'
                    }
                    ,
                    {
                        name: '内分泌科'
                    },
                    {
                        name: '内分泌科'
                    }
                    
                    
                ]
            }
        ],
        selectName: '内科',
        selectKzList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let title = '科室列表-'
        if (options.type === 'DR') {
            title = title + '当日挂号'
        }
        if (options.type === 'YY') {
            title = title + '预约挂号'
        }
        wx.setNavigationBarTitle({
            title: title
        })
        this.setData({
            selectKzList: this.data.typeList[0].children
        })
        this.getList()
    },
    getList() {
        indexedSubject().then(ret => {
            this.setData({
                list: ret.list
            })
        })
    },
    toPaiBan(e) {
        //   console.log(e)
        const subjects = e.currentTarget.dataset.subjects
        wx.navigateTo({
            url: '/menzhen/paiban/paiban?name=' + subjects.name
        })
    },
    changeTypes (e) {
        const item = e.currentTarget.dataset.item
        this.setData({
            selectName: item.name,
            selectKzList: item.children
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