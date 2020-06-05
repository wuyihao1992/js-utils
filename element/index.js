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
 * 判断内容有无超出高度
 * @param el
 * @return {boolean}
 */
export function hasOverflowY(el) {
    if (!el) {
        return false;
    }

    return el.scrollHeight > el.clientHeight || el.offsetHeight > el.clientHeight;
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

/**
 * 判断滚动元素是否滚动到底部
 * (clientHeight + scrollTop) >= scrollHeight 则滚动到底部
 *
 * @param el 滚动元素
 * @param spacing 距离底部的距离多少则认为是已经滚动到底部，预加载时使用，优化体验
 * @return {boolean}
 */
export function checkScrollBottom(el, spacing = 0) {
    if (!el) {
        return false;
    }

    // 元素总高度
    const scrollHeight = el.scrollHeight;
    // 可视区域高度
    const clientHeight = el.clientHeight || document.body.clientHeight || document.documentElement.clientHeight || 0;
    // 滚动距离
    const scrollTop = el.scrollTop;

    // showToast(`scrollHeight: ${scrollHeight}--clientHeight: ${clientHeight}--scrollTop: ${scrollTop}`);

    if (scrollHeight - (clientHeight + scrollTop) <= spacing) {
        return true;
    } else {
        return false;
    }
}
