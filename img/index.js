/**
 * img 转 base64
 * @param img
 * @return {string}
 */
function getBase64(img) {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // 可选其他值 image/jpeg
    const dataURL = canvas.toDataURL("image/png");

    return dataURL;
}

export function getImgBase64(src, cb) {
    let image = new Image();
    // 处理缓存
    image.src = src + '?v=' + Math.random();
    // 支持跨域图片
    image.crossOrigin = "*";
    image.onload = function () {
        const base64 = getBase64(image);
        cb && cb(base64);
    }
}
