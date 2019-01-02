// 转base64；
const imgBase = (el) => {
    return new Promise(resolve => {
        let reads = new FileReader();
        reads.readAsDataURL(el);
        reads.onload = (e) => {
            resolve(e.target.result);
        };
    })
}

export default imgBase;

