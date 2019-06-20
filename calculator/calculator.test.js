// const { add } = require("./calculator.js");

// // test away! changes

const calculator = require("./calculator.js");

describe("calculator.js", function() {
  // tests or nested describes here
  test("using test", () => {
    expect(true).not.toBe(false);
  });

  it("should can add two numbers", () => {
    const expected = 4;
    const actual = calculator.add(2, 2);

    // assertion
    expect(actual).toBe(expected);
    // .toBe() is a matcher
    // jestjs.io/docs/en/expect
    expect(calculator.add(2, 3)).toBe(5);
    // same code as lines 14-18
    expect(calculator.add(2, 2)).toBe(4);
  });

  it("should return the value if only 1 number given", () => {
    expect(calculator.add(2)).toBe(2);
    expect(calculator.add(3)).toBe(3);
  });

  it("should add any number of arguments", () => {
    expect(calculator.add(1, 2, 3)).toBe(6);
    expect(calculator.add(1, 0, 3)).toBe(4);
    expect(calculator.add(1, 0, 3, 1, 2, 4)).toBe(11);
    expect(calculator.add(1)).toBe(1);
    expect(calculator.add(-1, 1)).toBe(0);
  });

  it("should return 0 if called with no arguments", () => {
    expect(calculator.add()).toBe(0);
    expect(calculator.add()).not.toBe(1);
  });

  it("sum an array of numbers", () => {
    expect(calculator.add([1, 2, 3])).toBe(6);
  });
});

// should return 0 if called with no arguments
// sum an array of numbers
