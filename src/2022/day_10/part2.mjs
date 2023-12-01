import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_10/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let x = 1;
  let cycle = 0;
  let screen = "";
  let dot = 0;

  const drawScreen = () => {
    if (x - 1 <= dot && dot <= x + 1) {
      screen += "#";
    } else {
      screen += ".";
    }
  }

  const incrementCycle = (y) => {
    cycle += y;
    dot += y;
  }

  const runCycle = (y) => {
    for (let i = 0; i < y; i++) {
      drawScreen();
      incrementCycle(1);

      if (cycle % 40 === 0) {
        screen += "\n";
        dot = 0;
      }
    }
  }

  for (const item of arr) {
    if (item.startsWith("noop")) {
      runCycle(1);
    }
    else {
      runCycle(2);
    }
    x += Number.parseInt(item.slice(5) || 0);
  }
  
  console.log(screen);
})();
