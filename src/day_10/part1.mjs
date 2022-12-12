import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_10/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let x = 1;
  let cycle = 0;
  let sum = 0;

  const checkCycle = () => {
    if (cycle === 20 || cycle === 60 || cycle === 100 || cycle === 140 || cycle === 180 || cycle === 220) return true;
    return false;
  }

  const incrementCycle = (y) => {
    cycle += y;
  }

  for (const item of arr) {
    if (item.startsWith("noop")) {
      incrementCycle(1);
      if (checkCycle()) {
        sum += cycle * x;
      }
    }
    else {
      incrementCycle(1);
      if (checkCycle()) {
        sum += cycle * x;
      }
      incrementCycle(1);
      if (checkCycle()) {
        sum += cycle * x;
      }
    }
    x += Number.parseInt(item.slice(5) || 0);
  }

  console.log(sum);
})();
