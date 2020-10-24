import ListNode from './common'

function mergeTwoList(l1, l2) {
    const sentry = new ListNode('')
    let cur = sentry

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else if (l1.val >= l2.val) {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
        cur.next = null
    } // while>

    if (l1 !== null) {
        cur.next = l1
    }
    if (l2 !== null) {
        cur.next = l2
    }

    return sentry.next
}
