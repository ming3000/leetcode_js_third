function containsNearbyDuplicate (nums, k) {
  const checkMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (checkMap[nums[i]] !== undefined && i - checkMap[nums[i]] <= k) {
      return true
    } // if>>
    checkMap[nums[i]] = i
  } // for>
  return false
}