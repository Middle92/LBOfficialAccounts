/**
 * @param {Array} info 需校验数组对象
 * @param {boolean} required 必填项
 * @param {string} requiredMassage 必填项提示信息
 * @param {string} regularMassage 正则提示信息
 * @param {string} type phone手机验证/email邮箱验证/username账号验证/password密码验证
 * @param {reg} regular 正则表达验证/不能跟type共存
 */
let boolean;
const validate = (info) => {
    boolean = true;
    for (let index = 0; index < info.length; index++) {
        const item = info[index];
        if(item.required) {
            if(!item.value) {
                tosat(item, item.requiredMassage)
                break
            } else if(getClass(item.value) === 'String' && !Boolean(item.value.trim())){
                tosat(item, item.requiredMassage)
                break
            } else if(getClass(item.value) === 'Array' && item.value.length < 1) {
                tosat(item, item.requiredMassage)
                break
            } else if(getClass(item.value) === 'Number') {
                console.log('Number');
            } else if(getClass(item.value) === 'Object') {
                console.log('Object');
            }
        }
        if(item.type) {
            let phone = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/,
                email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
                username = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/,
                password = /^[a-zA-Z0-9]{6,12}$/;
            if(item.type === 'phone') {
                if(!phone.test(item.value)) {
                    tosat(item, item.regularMassage || item.requiredMassage)
                    break
                }
            } else if (item.type === 'email') {
                if(!email.test(item.value)) {
                    tosat(item, item.regularMassage || item.requiredMassage)
                    break
                }
            } else if (item.type === 'username') {
                if(!username.test(item.value)) {
                    tosat(item, item.regularMassage || item.requiredMassage)
                    break
                }
            } else if (item.type === 'password') {
                if(!password.test(item.value)) {
                    tosat(item, item.regularMassage || item.requiredMassage)
                    break
                }
            }
        }
        if(item.regular) {
            if(!item.regular.test(item.value)) {
                tosat(item, item.regularMassage || item.requiredMassage)
                break
            }
        }
        item.callBack && item.callBack;
    }
    return boolean;
}

let tosat = (item, massage) => {
    vm.$vux.toast.show({
        type: 'text',
        text: massage,
        onHide: item.callBack && item.callBack
    })
    boolean = false;
}

let getClass = (target) => {
    if(target===null) return "Null";
    if(target===undefined) return "undefined";
    return Object.prototype.toString.call(target).slice(8,-1);
}

export default validate;