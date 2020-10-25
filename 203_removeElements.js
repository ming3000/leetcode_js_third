import ListNode from './common'

function removeElements(head, val) {
  const sentry = new ListNode('')
  sentry.next = head

  let pre = sentry
  let cur = head
  while (cur !== null) {
    if (cur.val === val) {
      pre.next = cur.next
    } else {
      pre = cur
    }
    cur = cur.next
  } // while>

  return sentry.next
}