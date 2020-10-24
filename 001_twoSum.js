function twoSum(nums, target) {
    const cm = new Map()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (cm.has(diff)) {
            return [cm.get(diff), i]
        } // if>>
        cm.set(nums[i], i)
    } // for>
}
