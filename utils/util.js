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
function getInfoFromId(idNumber) {
  if (idNumber.length !== 18) {
    throw new Error('Invalid ID number length')
  }
 
  const sex = (parseInt(idNumber.charAt(16), 10) % 2 === 0) ? '女' : '男'
  const year = idNumber.substring(6, 10)
  const month = idNumber.substring(10, 12)
  const day = idNumber.substring(12, 14)
  const birthDate = `${year}-${month}-${day}`
 
  return {
    sex,
    birthDate
  }
}

let nation = ["汉族", "回族", "藏族", "彝族", "哈尼族", "白族", "傣族",
"苗族", "壮族", "满族", "维吾尔族",
"侗族", "瑶族", "土家族", "黎族", "畲族",
"水族", "佤族", "羌族", "土族", "布依族",
"怒族", "京族", "朝鲜族", "哈萨克族", "蒙古族",
"傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族",
"纳西族", "仫佬族", "锡伯族", "柯尔克孜族", "达斡尔族",
"景颇族", "塔塔尔族", "赫哲族", "珞巴族",
"普米族", "毛南族", "撒拉族", "布朗族", "塔吉克族",
"阿昌族", "鄂温克族", "基诺族", "德昂族", "保安族",
"俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族",
"独龙族"]

let jobList = [
  {
    value: '国家公务员',
    code: '11'
  },
  {
    value: '专业技术人员',
    code: '13'
  },
  {
    value: '职员',
    code: '17'
  },
  {
    value: '企业管理人员',
    code: '21'
  },
  {
    value: '工人',
    code: '24'
  },
  {
    value: '农民',
    code: '27'
  },
  {
    value: '学生',
    code: '31'
  },
  {
    value: '现役军人',
    code: '37'
  },
  {
    value: '自由职业者',
    code: '51'
  },
  {
    value: '个体经营者',
    code: '54'
  },
  {
    value: '无业人员',
    code: '70'
  },
  {
    value: '退（离）休人员',
    code: '80'
  },
  {
    value: '进修人员',
    code: '91'
  },
  {
    value: '新生儿Ⅳ期',
    code: '1'
  },
  {
    value: '婴儿期',
    code: '2'
  },
  {
    value: '幼儿期',
    code: '3'
  },
  {
    value: '学龄期',
    code: '4'
  },
  {
    value: '儿童',
    code: '5'
  }
]

let matrimonyLsit = [
  {
    value: '未婚',
    code: '10'
  },
  {
    value: '已婚',
    code: '20'
  },
  {
    value: '离婚',
    code: '40'
  },
  {
    value: '丧偶',
    code: '30'
  }
]
let relList = [
  {
    value: '本人',
    code: '1'
  },
  {
    value: '父母',
    code: '2'
  },
  {
    value: '子女',
    code: '3'
  },
  {
    value: '夫妻',
    code: '4'
  },
  {
    value: '亲属',
    code: '5'
  },
  {
    value: '其他',
    code: '6'
  }
]

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
    OrgId: getOrgId(),
    getInfoFromId,
    nationList: nation, // 民族字典值
    matrimonyLsit: matrimonyLsit, // 婚姻状态字典值
    jobList: jobList, // 工作字典
    relList: relList, // 关系字典
}