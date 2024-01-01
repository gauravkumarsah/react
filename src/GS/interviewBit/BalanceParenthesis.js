const A = '())';
const stack = [];

const test = () => {
  if (A.length % 2) console.log('0')
  for (let char of A) {
    if (char === '(') {
      stack.push(char);
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        console.log('0')
      }
    }
  }

  return stack.length ? console.log('0') : console.log('1');
};

test();
