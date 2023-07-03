function letterCombinations(input_digit) {
  // Mapping of digit to letters
  const digitToLetters = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  // Base case: If the input digit string is empty, return an empty array
  if (input_digit.length === 0) {
    return [];
  }

  // Base case: If the input digit string has only one digit, return the corresponding letters
  if (input_digit.length === 1) {
    const digit = parseInt(input_digit);
    return Array.from(digitToLetters[digit]);
  }

  // Recursive case: Divide the problem into subproblems
  const firstDigit = parseInt(input_digit[0]);
  const remainingDigits = input_digit.slice(1);

  // Recursively get the letter combinations for the remaining digits
  const remainingCombinations = letterCombinations(remainingDigits);

  // Generate letter combinations for the current digit by combining it with each letter from the remaining combinations
  const combinations = [];
  for (let letter of digitToLetters[firstDigit]) {
    for (let combination of remainingCombinations) {
      combinations.push(letter + combination);
    }
  }

  return combinations;
}

module.exports = letterCombinations;

