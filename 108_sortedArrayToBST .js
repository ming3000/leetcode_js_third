import TreeNode from './common'

function sortedArrayToBST (nums) {
    if (nums.length === 0) {
        return null
    }

    const mid = nums.length >> 1
    const root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))
    return root
}