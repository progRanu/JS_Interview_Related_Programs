const numbers = [4,6,-8,14,8,4,14];
function areValuesUnique(numbers) {
     for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(areValuesUnique(numbers));