import TreeNode from './common'

function isSymmetric(root) {
    let u = root
    let v = root
    const queue = [u, v]
    while (queue.length > 0) {
        u = queue.shift()
        v = queue.shift()
        if (u === null && v === null) {
            continue
        } // if>>
        if (u === null || v === null) {
            return false
        } // if>>
        if (u.val !== v.val) {
            return false
        } // if>>

        queue.push(u.left)
        queue.push(v.right)
        queue.push(u.right)
        queue.push(v.left)
    } // while>
    return true
}