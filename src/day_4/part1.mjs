import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_4/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let count = 0;

  for (const item of arr) {
    const [[x1, x2], [y1, y2]] = item.split(",").map(i => i.split("-")).map(i => [parseInt(i[0]), parseInt(i[1])]);
    
    if ((x1 <= y1 && x2 >= y2)
    ||
    (x1 >= y1 && x2 <= y2)) {
      count++;
    }
  }

  console.log(count);
})()
