import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  part1(arr);
  part2(arr);
})()

function part1(arr) {
  let result = 0;

  for (const elem of arr) {
    const digits = elem.match(/\d/g);
    const num = digits.length > 1 ? digits[0] + digits[digits.length - 1] : digits[0] + digits[0];
    result += parseInt(num);
  }

  console.log('part 1', result);
}

function part2(arr) {
  const nums = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };
  let result = 0;

  for (let elem of arr) {
    let first = Number.MAX_VALUE;
    let last = 0;
    let firstDigit;
    let secondDigit;
    for (const num in nums) {
      if (first > elem.indexOf(num) && elem.indexOf(num) !== -1) {
        first = elem.indexOf(num);
        firstDigit = nums[num];
      }
      if (last < elem.lastIndexOf(num) && elem.lastIndexOf(num) !== -1) {
        last = elem.lastIndexOf(num);
        secondDigit = nums[num];
      }
      if (first > elem.indexOf(nums[num]) && elem.indexOf(nums[num]) !== -1) {
        first = elem.indexOf(nums[num]);
        firstDigit = nums[num];
      }
      if (last < elem.lastIndexOf(nums[num]) && elem.lastIndexOf(nums[num]) !== -1) {
        last = elem.lastIndexOf(nums[num]);
        secondDigit = nums[num];
      }
    }
    result += parseInt(`${firstDigit}${secondDigit ?? firstDigit}`);
  }

  console.log('part 2', result);
}