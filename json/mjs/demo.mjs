import {extend as $_extend} from "./index.mjs"

const a = {
    name: '111',
    id: '111',
    other: {
        test: 111
    },
    children: [{
        name: '111-1',
        id: '111-1',
        other: {
            test: 1111
        },
        children: []
    }]
};

const b = {
    id: '111-change',
    other: {
        test: 111,
        testObj: {
            test: 222,
        }
    },
    children: [{
        children: [{
            name: '111-1-2',
            id: '111-1-2',
            other: {
                test: 11112
            }
        }]
    }]
};

let c = $_extend(a, b);
console.log(JSON.stringify(c));
