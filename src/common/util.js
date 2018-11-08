//普通工具
const generalUtil = {
    decodeHtml: function(arg) {
        var m = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&quot;": '"',
            "&copy;": "",
            "&apos;": "'"
        };
        return (typeof arg != "string") ? arg: arg.replace(/&\w+;|&#(\d+);/g,
            function(o, n) {
                var p = m[o];
                if (p === undefined) {
                    if (!isNaN(n)) {
                        p = String.fromCharCode((n == 160) ? 32 : n);
                    } else {
                        p = o;
                    }
                }
                return p;
            })
    },
    isUnsignedNumeric:function(number){
        if(objectUtil.isEmpty(number)){
            return false;
        }
        var req = /^\d+(\.\d+)?$/;
        return req.test(number);
    },
    isInteger: function(number) {
        if (objectUtil.isEmpty(number)) {
            return false;
        }
        var req = /^(-     |\+)?\d+$/;
        return req.test(number);
    },
    isUnsignedInteger: function(number) {
        var req = /^\d+$/;
        return req.test(number);
    },
    isFloat: function(number) {
        if (objectUtil.isEmpty(number)) {
            return false;
        }
        var req = /^[0-9]+\.{0,1}[0-9]{0,2}$/;
        return req.test(number);
    },
    isPhoneNum: function(phone) {
        if (objectUtil.isEmpty(phone)) {
            return false;
        }
        var req = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(14[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        return req.test(phone);
    },
    isPhone: function(phone) {
        if (objectUtil.isEmpty(phone)) {
            return false;
        }
        var req = /^(0\\d{2}-\\d{8}(-\\d{1,4})?)|(0\\d{3}-\\d{7,8}(-\\d{1,4})?)$/;
        return req.test(phone);
    },
    isEmail: function(email) {
        if (objectUtil.isEmpty(email)) {
            return false;
        }
        var req = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        return req.test(email);
    },
    //转换为金额
    changePrice: function(price) {
        if (price !== "" && price !== 0) {
            return price.toFixed(2);
        }
        else {
            return "0.00";
        }
    },
    isNumber:function(val){
        return /^[\d]+$/.test(val);
    },
    hasSpace: function(arg) {
        if (val == undefined || val == null || val == "null" || val == "undefined") {
            return true
        }
        return arg.indexOf("") > -1
    },
    SubString: function(val, length) {
        if (val != null&&val!=undefined&&val!=''){
            if(val.length>length){
                return val.substr(0, length)+'...';
            }else{
                return val.substr(0, length);
            }
        }else{
            return '';
        }

    },
    isEmpty:function(val){
        if(val==undefined||val==null||val==""){
            return true;
        }
        return false;
    },
    trim:function(str) { //删除左右两端的空格
        return str.replace(/(^\s*)|(\s*$)/g, ""); //把空格替换为空
    },
    //获取当前的x坐标值
    pageX:function(elem){
        return elem.offsetParent?(elem.offsetLeft+this.pageX(elem.offsetParent)):elem.offsetLeft;
    },
    //获取当前的Y坐标值
    pageY:function(elem){
        return elem.offsetParent?(elem.offsetTop+this.pageY(elem.offsetParent)):elem.offsetTop;
    },
    //生成唯一标识
    getGuid:function(){
        function uuid() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        }
        var timestamp=new Date().getTime();
        var guid=uuid()+"-"+timestamp;
        return guid;
    },
    genReportId:function(){
        try{
            var reportId=M.cookie.getCookie('reportGid');
            if(!M.string.isEmpty(reportId)){
                var reportArr=reportId.split('=');
                if(reportArr.length==2){
                    return reportArr[1];
                }else{
                    var guid=M.string.getGuid();
                    M.cookie.setCookie('reportGid', guid,1000,'','www.labtest.com');
                    return guid;
                }
            }else{
                var guid=M.string.getGuid();
                M.cookie.setCookie('reportGid', guid,1000,'','www.labtest.com');
                return guid;
            }
        }catch(e){
            return '';
        }
    }
}
//对象工具
const objectUtil = {
    merge:function(target,source,isarr){
        if(!target || !source || typeof source !="object"){
            return target;
        }
        if(!isarr){
            for(var i in source){
                target[i] = source[i];
            }
        }else{
            var tproperty, sproperty;
            for(tproperty in source){
                if(source.hasOwnProperty(tproperty)){
                    sproperty = source[tproperty];
                    if(sproperty&&sproperty.constructor===Object){
                        if(source[tproperty] && source[tproperty].constructor===Object){
                            objectUtil.merge(target[tproperty],sproperty);
                        }else{
                            target[tproperty] = sproperty;
                        }
                    }else{
                        target[tproperty] = sproperty;
                    }
                }
            }
        }
        return target;
    },
    clone:function(source,isarr){
        return objectUtil.merge({},source,isarr);
    },
    namespace:function(){
        var namespaceObj = arr,subObj;
        for(var i=0;i<arguments.length;i++){
            var tmp = arguments[i];
            if(objectUtil.$mTcObj.namespace[tmp]){
                continue;
            }
            arr = tmp.split(".");
            for(var j=0;j<arr.length;j++){
                subObj = arr[j];
                if(!namespaceObj[subObj]){
                    namespaceObj[subObj] = {};
                }
                namespaceObj = namespaceObj[subObj];
            }
            objectUtil.$mTcObj.namespace[tmp] = true;
        }
    },
    extend:function(){
        var l = function(p){
            for(var n in  p){
                if(!p.hasOwnProperty(n)){
                    continue;
                }
                this[n] = p[n];
            }
        };
        return function(p,o){
            (typeof p == "function") || (p = function(){});
            var m = function(){
                p.apply(this,arguments);
            }
            var n  = function() {};
            n.prototype = p.prototype;
            m.prototype = new n();
            m.prototype.constructor = m;
            m.superclass = p.prototype;
            if(p.prototype.constructor === Object.prototype.constructor){
                p.prototype.constructor = p;
            }
            m.override = function(r){
                if(m.prototype && r && typeof r == "object"){
                    for(var q in r){
                        m.prototype[q] = r[q];
                    }
                }
            };
            m.prototype.override = l;
            m.override(o);
            return m;
        }
    }(),
    each:function(obj,func,otherobj){
        if(objectUtil.isEmpty(obj) || !func){
            return ;
        }
        if(objectUtil.isArray(obj)){
            for(var i= 0;i<obj.length;i++){
                try{
                    if(func.call(otherobj,obj[i],i,obj) === false){
                        return;
                    }
                }catch(e){
                    base.log(e,"error");
                }
            }
        }else{
            for(var i in obj){
                if(!obj.hasOwnProperty(i)){
                    continue;
                }
                try{
                    if(func.call(otherobj,obj[i],i,obj) === false){
                        return ;
                    }
                }catch(e){
                    //记录日志
                    base.log(e,"error");
                }
            }
        }
    },
    contains:function(obj,value){
        if(objectUtil.isArray(obj)){
            if("indexOf" in Array.prototype){
                return obj.indexOf(value) !=-1;
            }
            for(var i = 0;i<obj.length;i++){
                if(obj[i] === value){
                    return true;
                }
            }
            return false;
        }else{
            return !objectUtil.isEmpty(obj) && value in obj;
        }
    },
    isEmpty:function(obj){
        if((typeof obj === "undefined") || (obj === null) || (objectUtil.isArray(obj)&&obj.length===0)){
            return true;
        }else{
            if(objectUtil.isObject(obj)){
                for(var i in obj){
                    if(Object.prototype.hasOwnProperty.call(obj,i)){
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    },
    //判断是否是对象
    isObject:function(obj){
        if(Object.prototype.toString(null==="[object Object]")){
            return obj !=null&&obj!=undefined&&Object.prototype.toString.call(obj)==="[object Object]"&&obj.ownerDocument===undefined;
        }else {
            return Object.prototype.toString.call(obj) === "[object Object]";
        }
    },
    isBlank:function(obj){
        return objectUtil.isEmpty(obj)? true : objectUtil.isEmpty(String(obj).replace(/^\s+|\s+$/g, ""));
    },
    isDefined:function(obj){
        return  typeof obj === "undefined";
    },
    //判断是否是方法
    isFunction:function(obj){
        return Object.prototype.toString.apply(obj) === "[object Function]";
    },
    isArray:function(obj){
        return Object.prototype.toString.apply(obj) === "[object Array]";
    },
    isDate:function(obj){
        return Object.prototype.toString.apply(obj) === "[object Date]";
    },
    isNumber:function(obj){
        return typeof obj === "number" && isFinite(obj);
    },
    isString:function(obj){
        return typeof obj === "string";
    },
    isBoolean:function(obj){
        return typeof obj === "boolean";
    },
    isName:function(obj){
        var patrn = /^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/;
        if(!patrn.exec(obj))
        {
            return false;
        }
        return true;
    },
    isMobile: function(val) {
        return /^\d{11}$/.test(val);
    },
    JsonToString: function(obj) {
        switch (typeof(obj)) {
            case 'string':
                return '"' + obj.replace(/(["\\])/g, '\\$1') + '"';
            case 'array':
                return '[' + obj.map(objectUtil.JsonToString).join(',') + ']';
            case 'object':
                if (obj instanceof Array) {
                    var strArr = [];
                    var len = obj.length;
                    for (var i = 0; i < len; i++) {
                        strArr.push(objectUtil.JsonToString(obj[i]));
                    }
                    return '[' + strArr.join(',') + ']';
                } else if (obj == null) {
                    return 'null';

                } else {
                    var string = [];
                    for (var property in obj) string.push(objectUtil.JsonToString(property) + ':' + objectUtil.JsonToString(obj[property]));
                    return '{' + string.join(',') + '}';
                }
            case 'number':
                return obj;
            case false:
                return obj;
            default:
                return obj;
        }
    }
};
export default {
    string:generalUtil,
    object:objectUtil
    // TimeStampConvertTime:TimeStampConvertTime
}