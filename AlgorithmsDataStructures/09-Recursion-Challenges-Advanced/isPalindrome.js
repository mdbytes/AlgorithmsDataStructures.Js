function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str.slice(0, 1) !== str.slice(-1)) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
