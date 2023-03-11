import { fibsIterate, fibsRec } from "./odiAssignmentOne";
import { mergeSort } from "./odinAssignmentTwo";
import { sumRange } from "./questionOne";
import { power } from "./questionTwo";
import { factorial, fatorial } from "./questionThree";
import { all } from "./questionFour";
import { productOfArray } from "./questionFive";
import { contains } from "./questionSix";
import { totalIntegers } from "./questionSeven";
import { sumOfSquares } from "./questionEight";
import { replicate } from "./questionNine";

test("Checks if fibonacci series obtained through recursion is same as the one obtained through iteration", () => {
  expect(fibsRec(8)).toEqual(fibsIterate(8))
})

test("Checks if merge sort algorithm works using mergeSort()", () => {
  expect(mergeSort([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6])
})

test("questionOne", () => {
  expect(sumRange(3)).toBe(6)
})

test("questionTwo", () => {
  expect(power(2, 4)).toBe(16)
})

test("questionThree", () => {
  expect(factorial(5)).toBe(120)
})

test("questionFour", () => {
  expect(all([1, 0, 9], (num) => { return num < 7 })).toBe(false);
  expect(all([1, 0, 5], (num) => { return num < 7 })).toBe(true);
})

test("questionFive", () => {
  expect(productOfArray([1, 2, 3, 10])).toBe(60)
})

test("questionSix", () => {
  const nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: 'foo2'
            }
          }
        }
      }
    }
  }
  expect(contains(nestedObject, 44)).toBe(true);
  expect(contains(nestedObject, 'foo')).toBe(false);
})

test("questionSeven", () => {
  expect(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])).toBe(7)
})

test("questionEight", () => {
  expect(sumOfSquares([1, 2, 3])).toBe(14);
  expect(sumOfSquares([[1, 2], 3])).toBe(14);
  expect(sumOfSquares([[[[[[[[[1]]]]]]]]])).toBe(1);
  expect(sumOfSquares([10, [[10], 2], [10]])).toBe(304);
})

test("questionNine", () => {
  expect(replicate(3, 5)).toEqual([5, 5, 5]);
  expect(replicate(1, 6)).toEqual([6]);
  expect(replicate(-2, 6)).toEqual([]);
})