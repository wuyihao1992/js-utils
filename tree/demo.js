import {findTreeNodeById} from "./index";

const nodeList = [{
    name: 'parent1',
    id: 1,
    children: [{
        name: 'parent1-child',
        id: 11,
    }],
}, {
    name: 'parent2',
    id: 2,
    children: [{
        name: 'parent2-child',
        id: 21,
    }],
}];

const nodeId = 11;

console.log(findTreeNodeById(nodeList, nodeId));
