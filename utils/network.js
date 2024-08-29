const BASE_URL = getApp().globalData.BASE_URL

var requestByHeader = function(url, data, methods, headers) {

    return new Promise((resolve, reject) => {
        let header = {}
        if (headers) {
            header = {
                ...headers
            }
        }
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url: BASE_URL + url,
            data: data,
            method: methods && 'GET',
            header: {
                ...header,
                token: wx.getStorageSync('token')
            },
            success(res) {
                wx.hideLoading()
                if (res.data.state !== 'ok') {
                    return wx.showModal({
                        title: '请求错误',
                        content: res.data.msg,
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