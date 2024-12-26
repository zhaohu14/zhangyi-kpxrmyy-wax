// const BASE_URL = getApp().globalData.BASE_URL
const { BASE_URL, OrgId } = require('./util')

var requestByHeader = function(url, data, methods, headers) {
    // data.OrgId = OrgId
    headers = headers ? headers : {}
    data = data ? data : {}
    data.OrgId = OrgId
    return new Promise((resolve, reject) => {
        let header = {}
        if (headers) {
            header = {
                'Content-Type': 'application/json; charset=utf-8',
                'OrgId': OrgId,
                'HisCashier': 'Web',
                'TermId': 'Web',
                ...headers
            }
        }
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url: BASE_URL + url,
            data: data,
            method: methods,
            header: {
                ...header,
                token: wx.getStorageSync('token')
            },
            success(res) {
                wx.hideLoading()
                // if (res.data.Code !== 200) {
                //     return wx.showModal({
                //         title: '请求错误',
                //         content: res.data.Msg,
                //         showCancel: false
                //     })
                // }
                console.log(res)
                if (res.statusCode !== 200) {
                    return wx.showModal({
                        title: '网络错误',
                        content: JSON.stringify(res),
                        showCancel: false
                    })
                }
                resolve(res.data)
            },
            fail: err => {
                wx.hideLoading()
                wx.showToast({
                    icon: 'none',
                    title: JSON.stringify(err)
                })
                reject(err)
            }
        })
    })
}

exports.requestByHeader = requestByHeader