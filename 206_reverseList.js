import ListNode from './common'

function reverseList(head) {
  let pre = null
  let cur = head
  while (cur !== null) {
    const nextBack = cur.next
    cur.next = pre
    pre = cur
    cur = nextBack
  }
  return pre
}