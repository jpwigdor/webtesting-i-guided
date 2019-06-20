module.exports = {
  add
};

// it should add two numbers
// function add(a, b) {
//   return a + b;
// }

//it should add any number of args
// function add(a = 0, b = 0) {
//   return a + b;
// }

//should add any number of arguments
//should return 0 if called with no arguments
// function add(...args) {
//   return args.reduce((accu, curr) => {
//     return accu + curr;
//   }, 0);
// }

//sum an array of numbers
// function add(args) {
//   if (Array.isArray(args)) {
//     args.reduce((accu, curr) => {
//       return accu + curr;
//     }, 0);
//   } else {
//     const values = Array.from(arguments);
//     return values.reduce((accu, curr) => {
//       return accu + curr;
//     }, 0);
//   }
// }

function add(args) {
  // variable values, if the args is an array, keep it. if not, turn it into an array
  const values = Array.isArray(args) ? args : Array.from(arguments);

  return values.reduce((accu, curr) => {
    return accu + curr;
  }, 0);
}
