function isLexLess(str1, str2) {
  let len = Math.min(str1.length, str2.length);

  for (let i = 0; i < len; i++) {
    let c1 = str1.charCodeAt(i);
    let c2 = str2.charCodeAt(i);

    if (c1 < c2) return true;   // str1 < str2
    if (c1 > c2) return false;  // str1 > str2
  }

  // All matched so far, now shorter one comes first
  return str1.length < str2.length;
}

console.log(isLexLess('apple', 'banana')); // true
console.log(isLexLess('cat', 'car'));      // false
console.log(isLexLess('app', 'apple'));    // true
