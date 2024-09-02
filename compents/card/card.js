// compents/card/card.js
import drawQrcode from '../../utils/qrcode'
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        cardInfo: {
            type: Object,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        switchCard () {
            console.log('触发成功')
        },
    },
    created () {
    },
})