import { sum } from "../sum";

test("sum function should calculate the sum of two number", () => {
  // // ### This are Helper fn, Used to do something Clean up task
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
