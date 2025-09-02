// index.js
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
  const result = a+b;
  // result = a+b; // ESLint error  'result' is not defined  no-undef
  return result;
};
export default add;