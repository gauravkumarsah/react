const input = 'the sky   is blue';

const reverseString = () => {
  let words = [];
  let word = '';
  let reverseString = '';

  for (let char of input) {
    if (char !== ' ') {
      word += char;
    }

    if (char === ' ') {
      if (word !== '') {
        words.push(word);
      }
      word = '';
    }
  }

  words.push(word);
  for (let i = 0, j = words.length - 1; i < j; i++, j--) {
    [words[j], words[i]] = [words[i], words[j]];
  }

  for (let i in words) {
    reverseString += words[i];
    if (i !== 0 && i < words.length - 1) {
      reverseString += ' ';
    }
  }
  console.log(words, reverseString.split(' '));
  return reverseString;
};

reverseString();
