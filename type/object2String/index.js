/**
 * 数据类型判断
 * 不需要再多判断一次 undefined
 * @param obj 需要判断的对象
 * @returns {string} ''/'String'/'Number'/'Object'/'Array'/'Function'/'Boolean'/'Undefined'
 */
export function object2String(obj) {
    let type = Object.prototype.toString.call(obj);
    let str = '';

    switch (type) {
        case '[object String]':
            str = 'String';
            break;
        case '[object Number]':
            str = 'Number';
            break;
        case '[object Object]':
            str = 'Object';
            break;
        case '[object Array]':
            str = 'Array';
            break;
        case '[object Function]':
            str = 'Function';
            break;
        case '[object Boolean]':
            str = 'Boolean';
            break;
        case '[object Undefined]':
            str = 'Undefined';
            break;
        default:
            break;
    }

    return str;
}
