import {localData, LocalData} from './index'

const STORAGE_KEY_NAME = 'STORAGE_KEY_NAME';
const STORAGE_KEY_TIME = 'STORAGE_KEY_TIME';

// 缓存
function setStorageName() {
    localData.set(STORAGE_KEY_NAME, 'name_test');
}

function setStorageTime() {
    new LocalData(1).set(STORAGE_KEY_TIME, new Date());
}

// 获取缓存值
function getStorageName() {
    const name = localData.get(STORAGE_KEY_NAME);
    console.log(name);
    return name;
}

function getStorageTime() {
    const time = new LocalData(1).get(STORAGE_KEY_TIME);
    console.log(time);
    return time;
}

// 删除缓存值
function removeStorageName() {
    localData.remove(STORAGE_KEY_NAME);
}

function removeStorageTime() {
    new LocalData(1).remove(STORAGE_KEY_TIME);
}
