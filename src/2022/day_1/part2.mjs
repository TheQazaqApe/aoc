import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_1/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let calories = [];
  let sum = 0;

  for (const item of arr) {
    if (item === "") {
      calories.push(sum);
      sum = 0;
      continue;
    }

    sum += Number.parseInt(item, 10);
  }

  calories.push(sum);

  calories.sort((a,b) => b - a);

  const [f, s, t] = calories;

  console.log(f + s + t);
})()
