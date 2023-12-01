import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_1/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let maxCalory = 0;
  let sum = 0;

  for (const item of arr) {
    if (item === "") {
      maxCalory = maxCalory < sum ? sum : maxCalory;
      sum = 0;
      continue;
    }

    sum += Number.parseInt(item, 10);
  }

  maxCalory = maxCalory < sum ? sum : maxCalory;

  console.log(maxCalory)
})()
