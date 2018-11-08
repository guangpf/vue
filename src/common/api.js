/**todo
 * @charset UTF-8
 * @Version 1.0.0
 * @接口
 * @name Evans_Cai
 * **/
const protocol = document.location.protocol == 'https:' ? 'https:' : 'http:';
// const global.currentIp = protocol + "//test.in-hope.com.cn/";
const HOSTS = {
    dev: {
        // 本地
        domain: protocol + '//192.168.1.200/'
    },
    product: {
        // 真实环境
        domain: protocol + '////172.19.47.148:8001/'
    }
}
const HOST = HOSTS[process.env.NODE_ENV].domain;
export default {
    // 实验淘版本
    version: {
        code: 'V1.1.1'
    },
    // 首页
    home: {
        GetHomePageCfg: HOST + 'Page/GetHomePageCfg'
    },
}
