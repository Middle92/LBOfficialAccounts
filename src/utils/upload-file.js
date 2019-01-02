import Fetch from './fetch';
// 上传图片
let uploadFile = (file) => {
    var form = new FormData(); // FormData 对象
    form.append("file", file); // 文件对象
    return Fetch({
      url: '/asyncUpload/uploadImgFile',
      body: form,
      type: false,
      credentials: false
    })
  }

  export default uploadFile;