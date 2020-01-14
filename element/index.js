/**
 * 阻止默认事件
 * @param e
 */
export function preventDefault(e) {
    if (!e) {
        return false;
    }

    e.stopPropagation();
    e.preventDefault();
}

/**
 * 判断内容有无超出宽度
 * @param el
 * @return {boolean}
 */
export function hasOverflowX(el) {
    if (!el) {
        return false;
    }

    return el.scrollLeft > el.clientWidth || el.offsetWidth > el.clientWidth;
}

/**
 * 计算最大左右滚动距离
 * @param el
 */
export function computeMaxScrollLeft(el) {
    if (!el) {
        return 0;
    }

    let maxLeft = 0;
    if (hasOverflowX(el)) {
        maxLeft = el.scrollWidth - el.clientWidth;
    }

    return maxLeft;
}
