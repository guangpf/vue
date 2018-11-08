var protocol = 'https:' == document.location.protocol ? 'https:' : 'http:'
var wxAuthUr = protocol + '//open.weixin.qq.com/connect/oauth2/authorize?appid={appid}&redirect_uri={redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'testing') { //本地环境，测试环境

    global.host = protocol + '//192.168.1.200:8066/';
    global.appid = 'wx3313bba3a77541ef'; //api.in-hope.com.cn appid
    global.currentIp = protocol + "//192.168.1.200:8066/";

} else if (process.env.NODE_ENV === 'pre') {  //预发布环境

    global.host = protocol + '//api.in-hope.com.cn/v1/';
    global.appid = 'wx6c38960bcacb7a79'; //api.in-hope.com.cn appid
    global.currentIp = protocol + "//api.in-hope.com.cn/";

} else if (process.env.NODE_ENV === 'product') {  // 线上环境

    global.host = protocol + '//xiaoan.api.in-hope.cn/v1/';
    global.appid = 'wx006d673ce5a4a44b'; // xiao.in-hope.cn appId
    global.currentIp = protocol + "//xiaoan.h5.in-hope.cn/";

}
// 通用地址
var redirect_uri = encodeURI(global.host + 'wxRedirect/STATE')
//var redirect_uri = encodeURIComponent(global.currentIp + '#/wxRedirect')
let redirect_uriLaw = encodeURI(global.host + 'getwxoauth')
global.wixAccredit = wxAuthUr.replace('{appid}', global.appid).replace('{redirect_uri}', redirect_uri)
global.wixAccredit2 = wxAuthUr.replace('{appid}', global.appid).replace('{redirect_uri}', redirect_uri.replace('STATE', 'SUBSCRIBE'))
global.wixAccreditLaw = wxAuthUr.replace('{appid}', global.appid).replace('{redirect_uri}', redirect_uriLaw).replace('snsapi_userinfo', 'snsapi_base,snsapi_userinfo')

// 域名切换 http://oss.in-hope.cn
global.shareImg1 = "http://oss.in-hope.cn/xiaoan/shareRulesContent.jpg"; // 法规公告分享图片
global.shareImg2 = "http://oss.in-hope.cn/xiaoan/20170628162356.jpg"; // 测评分享图片
global.shareImg3 = "http://oss.in-hope.cn/image/1441513133897_.pic.jpg"; // 董办2017 分享图片
global.xiaoetongUrl = 'https://h5.xiaoeknow.com/appe8O3plIM2665/homepage';
global.timestamp = Math.random();
global.version = 'V1.1.1';

export default {
    host,
    wixAccredit,
    wixAccredit2,
    appid,
    shareImg1,
    shareImg2,
    timestamp,
    currentIp,
    xiaoetongUrl,
    version
}
