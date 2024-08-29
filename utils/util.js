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

module.exports = {
    formatTime,
    lastTime
}