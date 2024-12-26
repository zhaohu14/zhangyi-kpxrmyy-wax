const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
}

function lastTime (addDayCount) {
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var dates = [];
    //var datestr;
    var myDate = new Date();
    for (var i = 0; i < addDayCount; i++) {
        var dd = new Date();
        dd.setDate(myDate.getDate() + i)
        dates.push({
            "date": (dd.getMonth() + 1) + "月" + "-" + dd.getDate() + "日",
            "fulldate": dd.getFullYear() + "-" + (dd.getMonth() + 1) + "-" + dd.getDate(),
            "name": weekday[dd.getDay()],
            "time": GetDateStr(dd)
        });
    }
    return dates
}

const GetDateStr = date => {
    //date=new Date();
    var year = date.getFullYear()
    const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  
    return [year, month, day].map(formatNumber).join('-')
  
}
let arr = [
    {
        appid: 'wxbaa536258b845126',
        OrgId: 'RSS12632202108230001',
        name: '柯坪县人民医院'
    },
    {
        appid: 'wx3af49090ef41f817',
        OrgId: 'RSS12632202108230006',
        name: '柯坪县启浪卫生院'
    },
    {
        appid: 'wx104a5cc4aa05d84d',
        OrgId: 'RSS12632202108230002',
        name: '柯坪县阿恰勒镇卫生院'
    },
    {
        appid: 'wx10e0325fc867ef97',
        OrgId: 'RSS12632202108230007',
        name: '柯坪县妇幼保健院'
    },
    {
        appid: 'wx39d6707b93266e5e',
        OrgId: 'RSS12632202108230003',
        name: '柯坪县盖孜力克镇卫生院'
    },
    {
        appid: 'wx1017b7e321a26f5b',
        OrgId: 'RSS12632202108230004',
        name: '柯坪县玉尔其乡卫生院'
    }
]

function getOrgId () { // 匹配appId获取OrgId
    const miniProgram = wx.getAccountInfoSync().miniProgram
    const appid =  miniProgram.appId
    let OrgId = null
    arr.forEach(ret => {
        if (appid === ret.appid) {
            OrgId = ret.OrgId
        }
    })
    return OrgId
}

module.exports = {
    formatTime,
    lastTime,
    BASE_URL: 'https://kpxrmyy.sunyotas.com', // 请求地址
    // OrgId: 'RSS12632202108230001', // 医院标识 柯坪县人民医院
    // OrgId: 'RSS12632202108230005', // 医院标识 柯坪县阿恰勒镇卫生院
    // OrgId: 'RSS12632202108230003', // 医院标识 盖孜力克镇卫生院
    // OrgId: 'RSS12632202108230004', // 医院标识 玉尔其乡卫生院
    // OrgId: 'RSS12632202108230006', // 医院标识 启浪乡卫生院
    // OrgId: 'RSS12632202108230007', // 医院标识 柯坪县妇幼保健院
    // OrgId: 'RSS12632202108230002', // 医院标识 柯坪镇卫生院
    OrgId: getOrgId()
}