function isPalindrome (s) {
     s = s.toLowerCase()
     let vs = ""
     for (let i = 0; i < s.length; i++) {
         if (isValidChar(s[i])) {
             vs += s[i]
         }
     }
     for (let i = 0; i < vs.length << 1; i++) {
         if (vs[i] !== vs[vs.length - i - 1]) {
            return false
         }
     }
     return true
}

function isValidChar(c) {
    if (c >= '0' && c <= '9') {
        return true
    }
    if (c >= 'a' && c <= 'z') {
        return true
    }
    return false
}

console.log("is:", isPalindrome("A man, a plan, a canal: Panama"))