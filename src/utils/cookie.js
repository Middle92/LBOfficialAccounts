const setCookie = (c_name,value,expiredays) => {
    let exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

const getCookie = (c_name) => {
    if (document.cookie.length>0) {
        let c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1) { 
            c_start=c_start + c_name.length+1 
            let c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}

const checkCookie = (c_name) => {
    let username=getCookie(c_name)
    if (username!=null && username!=""){
        return true;
    } else  {
        return false;
    }
}

const delCookie = (c_name) => { 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(c_name); 
    if(cval!=null) 
        document.cookie= c_name + "="+cval+";expires="+exp.toGMTString(); 
}

export {
    setCookie,
    getCookie,
    checkCookie,
    delCookie
}