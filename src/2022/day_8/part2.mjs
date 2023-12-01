import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_8/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  const matrix = [];

  for (const item of arr) {
    matrix.push(item.split("").map(i => Number.parseInt(i, 10)));
  }

  let max = 0;

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      
      const current = matrix[i][j];
      let up = 0;
      let down = 0;
      let right = 0;
      let left = 0;

      for (let I = i - 1; I >= 0; I--) {
        if (matrix[I][j] < current) {
          up++;
        } else if (matrix[I][j] >= current) {
          up++;
          break;
        }
      }

      for (let I = i+1; I < matrix.length; I++) {
        if (matrix[I][j] < current) {
          down++;
        } else if (matrix[I][j] >= current) {
          down++;
          break;
        }
      }

      for (let J = j - 1; J >= 0; J--) {
        if (matrix[i][J] < current) {
          left++;
        } else if (matrix[i][J] >= current) {
          left++;
          break;
        }
      }

      for (let J = j+1; J < matrix[0].length; J++) {
        if (matrix[i][J] < current) {
          right++;
        } else if (matrix[i][J] >= current) {
          right++;
          break;
        }
      }

      let sum = up * down * left * right;
      if (sum > max) {
        max = sum;
      }
    }
  }

  console.log(max);
})();
