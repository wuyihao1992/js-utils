/**
 * 获取某对象数据类型字符串
 * 7种语言类型(数据类型): {基本类型: Null|Undefined|Boolean|String|Number|Symbol, 引用类型: Object}
 * 7种规范类型: 引用|列表|完成|属性描述符|属性标识符|词汇环境|环境记录
 * http://www.ecma-international.org/ecma-262/5.1/#sec-8
 *
 * @param obj 需要判断的对象
 * @returns {string} Null|Undefined|Boolean|String|Number|Symbol|Object|Array|Function|Date|RegExp|Error|Promise|Set
 */
export function object2String(obj) {
    // [object Object]
    const type = Object.prototype.toString.call(obj);

    return type.slice(8, -1);
}

class ProToType {
    isNull(o) {
        return object2String(o) === 'Null';
    }

    isUndefined(o) {
        return object2String(o) === 'Undefined';
    }

    isBoolean() {
        return object2String(o) === 'Boolean';
    }

    isString() {
        return object2String(o) === 'String';
    }

    isNumber(o) {
        return object2String(o) === 'Number';
    }

    isSymbol(o) {
        return object2String(o) === 'Symbol';
    }

    isObject(o) {
        return object2String(o) === 'Object';
    }

    isArray(o) {
        return object2String(o) === 'Array';
    }

    isFunction(o) {
        return object2String(o) === 'Function';
    }

    isDate(o) {
        return object2String(o) === 'Date';
    }

    isRegExp(o) {
        return object2String(o) === 'RegExp';
    }

    isError(o) {
        return object2String(o) === 'Error';
    }

    isPromise(o) {
        return object2String(o) === 'Promise';
    }

    isSet(o) {
        return object2String(o) === 'Set';
    }
}

export const proToType = new ProToType();
