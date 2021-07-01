const reverse = (s) => {
  if (typeof s !== 'string') return '';
  const splitString = s.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  return joinArray;
};

module.exports = reverse;