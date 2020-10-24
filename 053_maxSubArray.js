function maxSubArray(nums) {
    let theMax = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + nums[i-1] > nums[i]) {
            nums[i] += nums[i-1]
        }
        theMax = Math.max(nums[i], theMax)
    }
    return theMax
}