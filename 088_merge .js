function merge(nums1, m, nums2, n) {
    let index = m + n - 1
    let i = m - 1
    let j = n -1
    while (j >= 0) {
        if (i >=0 && nums1[i] > nums2[j]) {
            nums1[index] = nums1[i]
            i -= 1
        } else {
            nums1[index] = nums2[j]
            j -= 1
        } // else>>
        index -= 1
    } // while>
}