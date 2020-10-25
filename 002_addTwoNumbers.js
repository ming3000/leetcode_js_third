import ListNode from './common'

function addTwoNumbers(l1, l2) {
  if (l1 === null || l2 === null) {
    return null
  }
  const sentry = new ListNode('')
  let cur = sentry
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    let curSum = carry
    if (l1 !== null) {
      curSum += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      curSum += l2.val
      l2 = l2.next
    }
    const newNode = new ListNode(Math.floor(curSum % 10))
    cur.next = newNode
    cur = cur.next
    carry = Math.floor(curSum / 10)
  } // while>
  return sentry.next
}