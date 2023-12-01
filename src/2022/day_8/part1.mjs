import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_8/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  const matrix = [];

  for (const item of arr) {
    matrix.push(item.split("").map(i => Number.parseInt(i, 10)));
  }

  let count = 0;

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      
      const current = matrix[i][j];
      let up = true;
      let down = true;
      let right = true;
      let left = true;

      for (let I = 0; I < i; I++) {
        if (matrix[I][j] >= current) {
          up = false;
        }
      }

      for (let I = i+1; I < matrix.length; I++) {
        if (matrix[I][j] >= current) {
          down = false;
        }
      }

      for (let J = 0; J < j; J++) {
        if (matrix[i][J] >= current) {
          left = false;
        }
      }

      for (let J = j+1; J < matrix[0].length; J++) {
        if (matrix[i][J] >= current) {
          right = false;
        }
      }

      if (up || down || left || right) {
        count++;
      }
    }
  }

  count += (matrix.length - 1) * 2 + (matrix[0].length - 1) * 2;

  console.log(count);
})();
