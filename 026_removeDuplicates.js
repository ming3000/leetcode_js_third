function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0
    }
    const size = nums.length
    let slow = 0
    for (let fast = 0; fast < size; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow += 1
            nums[slow] = nums[fast]
        } // if>>
    } // for>

    return slow + 1
}