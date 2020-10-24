function maxDepth(root) {
    if (root === null) {
        return 0
    }

    const queue = [root]
    let level = 0
    while (queue.length > 0) {
        level += 1
        let curLevelLen = queue.length
        for (let i = 0; i < curLevelLen; i++){
            let node = queue.shift()
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        } // while>>
    } // while>
    return level
}