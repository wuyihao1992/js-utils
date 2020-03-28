/**
 * 货币格式化
 * @param num
 */
export function formatMoney(num) {
    let fixedNumber = '0.00';
    const doFixed = function (number) {
        const splitArr = number.toString().split('.');
        if (splitArr.length > 1) {
            const decimalLength = splitArr[1].length;
            const decimalSection = decimalLength > 1 ? splitArr[1].substr(0, 2) : `${splitArr[1]}0`;
            return `${parseFloat(splitArr[0]).toLocaleString()}.${decimalSection}`;
        } else {
            return `${parseFloat(num).toLocaleString()}.00`;
        }
    };

    if (isNaN(num)) {
        return fixedNumber;
    }

    if (num >= 0) {
        fixedNumber = doFixed(num);
    } else {
        num = Math.abs(num);
        fixedNumber = doFixed(num);
        fixedNumber = `-${fixedNumber}`;
    }

    return `${fixedNumber}`
}

/**
 * 保留两位小数, 将浮点数四舍五入，取小数点后2位
 * @param x
 * @returns {number}
 */
export function toDecimal(x) {
    let f = parseFloat(x);

    if (isNaN(f)) {
        return 0;
    }

    f = Math.round(x * 100) / 100;

    return f;
}

/**
 * 提取字符串中的数字
 */
export function parseIntPlugs(str) {
    return str.replace(/[^0-9]/ig, '');
}

/**
 * 隐藏部分手机号码
 *
 * @param number
 * @return {string|*}
 */
export function formatPhoneNumber(number) {
    if (!number) {
        return '';
    }

    return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3");
}
