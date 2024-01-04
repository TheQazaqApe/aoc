import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  part1(arr);
  // part2(arr);
})()

function part1(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const nums = arr[i].match(/\d+/g);
    for (const num of nums) {
      const firstIndex = arr[i].indexOf(num);
      let valid = false;
      for (let j = firstIndex - 1; j <= firstIndex + num.length; j++) {
        if (j === -1) j = 0;
        if (j >= arr[i].length) j = arr[i].length - 1;
        if (i !== 0 && isSymbol(arr[i-1][j])) {
          valid = true;
          break;
        }
        if (i !== arr.length - 1 && isSymbol(arr[i+1][j])) {
          valid = true;
          break;
        }
        if (isSymbol(arr[i][j])) {
          valid = true;
          break;
        }
      }
      console.log(num, valid);
      if (valid) {
        result += parseInt(num);
      }
    }
  }
  console.log(result);
}

function isSymbol(c) {
  return /[^0-9.]/.test(c);
}