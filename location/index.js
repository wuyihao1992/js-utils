/**
 * 将json对象转换为URL search参数
 *
 * @param params
 * @return {string}
 */
export function parseUrlParam(params) {
    if (!params || Object.prototype.toString.call(params) !== '[object Object]') {
        return '';
    }

    return Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
}
