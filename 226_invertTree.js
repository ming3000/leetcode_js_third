import TreeNode from './common'

function invertTree (root) {
  if (root === null) {
    return root
  }
  const left = root.left
  const right = root.right
  root.left = right
  root.right = left
  invertTree(root.left)
  invertTree(root.right)
  return root
}