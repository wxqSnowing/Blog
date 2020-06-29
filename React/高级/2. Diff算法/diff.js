/**
 * 插入 || diff DOM函数
 * @param {HTMLElement || Object} vnode container容器 || vnode节点
 * @param {object} newVnode newVnode节点
 */
function patch(vnode, newVnode) {
    if (vnode instanceof HTMLElement) { // 若第一个参数是DOM节点，插入到容器里
        let node = createElement(newVnode);
        vnode.appendChild(node);
    } else { // 两个都为vnode,执行diff算法
        createElement(newVnode); // 绑定DOM节点到newVnode上
        updateChildren(vnode, newVnode); // diff
    }
}
/**
 * vnode生成函数
 * @param {String} tag 标签名
 * @param {object} attrs 属性
 * @param {Array} children 子节点
 * @param {String} text 文本节点
 */
function h(tag = '', attrs = {}, children = [], text = '') {
    return {
        tag: tag,
        attrs: attrs,
        children: children,
        text: text
    }
}
/**
 * 真实 DOM 生成函数
 * @param {Object} vnode vnode节点
 */
function createElement(vnode) {
    let tag = vnode.tag;
    let children = vnode.children || [];
    let attrs = vnode.attrs || {};
    let text = vnode.text || '';
    if (!tag) {
        return null
    }
    // 创建真实的 DOM 元素
    let elem = document.createElement(tag);
    if (text) {
        elem.innerText = text;
    }
    // 设置属性
    for (let key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            elem.setAttribute(key, attrs[key])
        }
    }
    // 添加子元素节点
    children.forEach((childVnode) => {
            elem.appendChild(createElement(childVnode))
        })
        // 真实 DOM 绑定到vnode上
    vnode.elem = elem;

    // 返回真实的 DOM 元素
    return elem
}

/**
 * Diff 函数
 * @param {Object} vnode vnode节点
 * @param {Object} newVnode newVnode节点
 */
function updateChildren(vnode, newVnode) {
    // 保存父节点，方便之后DOM节点的删除
    let currentNode = vnode.elem;
    // 对比当前节点是否相同
    if (vnode.tag === newVnode.tag && vnode.text === newVnode.text && vnode.attrs.toString() === newVnode.attrs.toString()) {
        // 若节点相同，深层次对比，递归(根据vnode & newVnode的数量,决定是增加节点还是删除节点)
        if (vnode.children.length >= newVnode.children.length) {
            let childrenArray = vnode.children; // 保存children数组，方便之后修改原vnode
            for (let i = vnode.children.length - 1; i >= 0; i--) {
                let childVnode = vnode.children[i];
                let newChildVnode = newVnode.children[i];
                if (newChildVnode && childVnode.tag === newChildVnode.tag) { // 防止newChildVnode===undefined导致报错
                    updateChildren(childVnode, newChildVnode) // 递归
                } else {
                    replaceNode(childVnode, newChildVnode, currentNode, childrenArray, i)
                }
            }
        } else {
            let childrenArray = vnode.children; // 保存children数组，方便之后修改原vnode
            for (let i = 0; i < newVnode.children.length; i++) {
                let childVnode = vnode.children[i];
                let newChildVnode = newVnode.children[i];
                if (childVnode && childVnode.tag === newChildVnode.tag) { // 防止childVnode===undefined导致报错
                    updateChildren(childVnode, newChildVnode) // 递归
                } else {
                    replaceNode(childVnode, newChildVnode, currentNode, childrenArray)
                }
            }
        }
    } else {
        replaceNode(vnode, newVnode)
    }
}
/**
 * 替换真实DOM节点 & 替换虚拟DOM节点
 * @param {Object} vnode 
 * @param {Object} newVnode 
 * @param {HTMLElement} parentNode 
 * @param {Array} childrenArray 
 * @param {Number} index 
 */
function replaceNode(vnode, newVnode, parentNode = null, childrenArray = [], index = 0) {
    if (vnode && newVnode) { // 若两者都是vnode,应替换节点
        let elem = vnode.elem;
        let newElem = newVnode.elem;
        replaceVNode(vnode, newVnode)
        elem.parentNode.replaceChild(newElem, elem);
    } else if (vnode) { // 若newVnode===undefined,应删除节点
        let elem = vnode.elem;
        childrenArray.splice(index, 1);
        elem.parentNode.removeChild(elem)
    } else { // 若vnode===undefined,应添加节点
        let newElem = newVnode.elem;
        childrenArray.push(newVnode);
        parentNode.appendChild(newElem);
    }
}
/**
 * 替换虚拟DOM节点
 * @param {Object} vnode 
 * @param {Object} newVnode 
 */
function replaceVNode(vnode, newVnode) {
    vnode.tag = newVnode.tag;
    vnode.elem = newVnode.elem;
    vnode.text = newVnode.text;
    vnode.attrs = newVnode.attrs;
    vnode.children = newVnode.children;
}