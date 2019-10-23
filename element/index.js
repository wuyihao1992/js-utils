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
