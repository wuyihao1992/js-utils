/**
 * 兼容性本地化存储方案封装
 * @param defaultStorageType 缓存类型，{1: sessionStorage , 2: localStorage }, 默认为1
 * 调用:
 * new LocalData(1).set('key', 123)
 * new LocalData(1).get('key')
 * new LocalData(1).remove('key')
 * localData.get('key')
 */
export function LocalData(defaultStorageType = 1) {
    this.hostName = location.hostname ? location.hostname : 'localStatus';

    // 用于判断sessionStorage是否可用
    this.isLocalStorage = !!window.sessionStorage;

    this.dataDom = null;

    /**
     * 当window.sessionStorage和window.localStorage不可用，则将数据存在dom节点
     *
     * @param key 主键，由set()或get()方法传入
     * @returns {boolean}
     */
    this.initDom = function (key) {
        if (!this.dataDom) {
            try {
                // 这里使用hidden的input元素
                this.dataDom = document.createElement('input');
                this.dataDom.type = 'hidden';
                this.dataDom.style.display = 'none';
                this.dataDom.setAttribute('id', key);

                document.body.appendChild(this.dataDom);

                return true;
            } catch (err) {
                return false;
            }
        } else {
            return true;
        }
    };

    /**
     * 存储
     *
     * @param key 主键
     * @param value 值
     * @param storageType 缓存类型，{1: sessionStorage , 2: localStorage }, 默认为1
     */
    this.set = function (key, value, storageType) {
        storageType = defaultStorageType || 1;

        if (this.isLocalStorage) {
            setStorage(key, value, storageType);
        } else {
            if (this.initDom(key)) {
                if (Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]') {
                    value = JSON.stringify(value);
                }

                this.dataDom.value = value;
            }
        }
    };

    /**
     * 获取
     *
     * @param key 主键
     * @param storageType 缓存类型，{1: sessionStorage , 2: localStorage }, 默认为1
     * @param isJSON 是否返回JSON，{true: 返回JSON , false: 返回String }, 默认为true
     * @returns {string | *}
     */
    this.get = function (key, storageType, isJSON = true) {
        storageType = defaultStorageType || 1;

        if (this.isLocalStorage) {
            return getStorage(key, storageType, isJSON);
        } else {
            if (this.initDom(key)) {
                var value = this.dataDom.value;

                if (isJSON) {
                    try {
                        value = JSON.parse(value);
                    } catch (err) {
                        console.warn('value is not a JSON string =>', err);
                    }
                }

                return value;
            }
        }
    };

    /**
     * 删除存储
     *
     * @param key 主键
     * @param storageType 缓存类型，{1: sessionStorage , 2: localStorage }
     */
    this.remove = function (key, storageType) {
        storageType = defaultStorageType || 1;

        if (this.isLocalStorage) {
            removeStorage(key, storageType);
        } else {
            if (this.initDom(key)) {
                document.body.removeChild(this.dataDom);
                this.dataDom = null;
            }
        }
    };
}

/**
 * 设置缓存值
 *
 * @param key 主键
 * @param value 值
 * @param storageType 缓存类型，{1: sessionStorage , 2: localStorage }
 */
function setStorage(key, value, storageType) {
    if (Object.prototype.toString.call(value) === '[object Object]' || Object.prototype.toString.call(value) === '[object Array]') {
        value = JSON.stringify(value);
    }

    if (!!storageType && storageType === 1) {
        sessionStorage.setItem(key, value);
    } else {
        localStorage.setItem(key, value);
    }
}

/**
 * 获取缓存
 *
 * @param key 主键
 * @param storageType 缓存类型，{1: sessionStorage , 2: localStorage }
 * @param isJSON 是否返回JSON，{true: 返回JSON , false: 返回String }
 * @returns {*}
 */
function getStorage(key, storageType, isJSON) {
    var value;

    if (!!storageType && storageType === 1) {
        value = sessionStorage.getItem(key);
    } else {
        value = localStorage.getItem(key);
    }

    if (!!isJSON) {
        try {
            value = JSON.parse(value);
        } catch (err) {
            console.warn('value is not a JSON string =>', err);
        }
    }

    return value;
}

/**
 * 删除缓存
 *
 * @param key 主键
 * @param storageType 缓存类型，{1: sessionStorage , 2: localStorage }
 */
function removeStorage(key, storageType) {
    if (!!storageType && storageType === 1) {
        sessionStorage.removeItem(key);
    } else {
        localStorage.removeItem(key);
    }
}

/**
 * Attention!!!! localData.get() 方法注意 return
 * @type {LocalData}
 */
export const localData = new LocalData();
