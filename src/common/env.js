/*
 * 配置编译环境和线上环境之间的切换
 * 以及静态变量
 * baseUrl: 域名地址
 * routerMode: 路由模式
 */
let baseUrl = '';
let routerMode = 'history';
let DEBUG = false;
let cancleHTTP = [];//取消请求头设置；
if (process.env.NODE_ENV == 'development') { //开发环境
    baseUrl = "";
    DEBUG = true;
}else if(process.env.NODE_ENV == 'production'){  //生产环境
    baseUrl = "/action";   //生产
    DEBUG = false;
}else if(process.env.NODE_ENV == 'testing'){  //测试环境地址
    baseUrl = "/action";   //测试地址
    DEBUG = false;
}

export default{
    baseUrl,
    routerMode,
    DEBUG,
    cancleHTTP
}