function isValid(s) {
    const cStack = []
    const cMap = {'{': '}', '[': ']', '(': ')'}
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            cStack.push(s[i])
        } else {
            if (cStack.length === 0) {
                return false
            }
            let top = cStack.pop()
            if (cMap[top] !== s[i]) {
                return false
            }
        } // else>>
    } // for>

    return cStack.length === 0
}