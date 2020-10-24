function binarySearchFirst(nums, target) {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] >= target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    if (low < nums.length && nums[low] === target) {
        return low
    }
    return -1
}

console.log('first index:', binarySearchFirst([1, 2, 3, 3, 5, 6], 3))
console.log('first index:', binarySearchFirst([1, 2, 3, 3, 5, 6], 1))
console.log('first index:', binarySearchFirst([1, 2, 3, 3, 5, 6], 10))

function binarySearchLast(nums, target) {
    let low = 0
    let high = nums.length
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] <= target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    if (high < nums.length && nums[high] === target) {
        return high
    }
    return -1
}

console.log('first index:', binarySearchLast([1, 2, 3, 3, 5, 6], 3))
console.log('first index:', binarySearchLast([1, 2, 3, 3, 5, 6], 1))
console.log('first index:', binarySearchLast([1, 2, 3, 3, 5, 6], 10))

