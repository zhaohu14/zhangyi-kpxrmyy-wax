const BASE_URL = getApp().globalData.BASE_URL
function requestByHeader (url, data, methods, headers) {
    let header = {}
    if (headers) {
        header = {
            ...headers
        }
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: BASE_URL + url,
            data: data,
            method: methods && 'GET',
            header: {
                ...header,
                token: wx.getStorageSync('token')
            },
            success: res => {
                resolve(res)
            },
            fail: err => {
                wx.showToast({
                    icon: 'none',
                    title: JSON.stringify(err)
                })
            }
        })
    })
}
