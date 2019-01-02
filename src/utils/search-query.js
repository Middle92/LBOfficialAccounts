// 将location的search转换Object
export default (str) => {
    if (str == undefined) return
    str = str.substr(1)
    var arr = str.split("&"),
        obj = {},
        newArr = []
    arr.map(function (value, index, arr) {
        newArr = value.split("=")
        if (newArr[0] != undefined) {
            obj[newArr[0]] = newArr[1]
        }
    })
    return obj
}