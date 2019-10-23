/**
 * 通过ID查找树节点
 * @param data 树节点列表
 * @param id 节点ID
 */
export function findTreeNodeById(data, id) {
    let node = null;
    let parentNode = null;

    let getNode = function (nodeList, nodeId) {
        for (let item of nodeList) {
            if (node) {
                break;
            }

            if (item.id === nodeId) {
                node = item;
                break;
            } else if (item.children && item.children.length > 0) {
                parentNode = item;
                getNode(item.children, nodeId);
            } else {
                continue;
            }
        }
    };

    getNode(data, id);

    if (!node) {
        parentNode = null;
    }

    return {
        node,
        parentNode,
    };
}

/**
 * 通过ID删除某个树节点
 * @param data 树节点列表
 * @param id 节点ID
 * @return 删除后的树节点列表
 */
export function deleteTreeNodeById(data, id) {
    let deleteNode = function (nodeList, nodeId) {
        for (let i = 0, len = nodeList.length; i < len; i++) {
            let item = nodeList[i];

            if (item.id === nodeId) {
                nodeList.splice(i, 1);
                break;
            } else if (item.children && item.children.length > 0) {
                item.children = deleteNode(item.children, nodeId);
            } else {
                continue;
            }
        }

        return nodeList;
    };

    return deleteNode(data, id);
}
