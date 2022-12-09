import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_9/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let headPos = { x: 0, y: 0 };
  let tailPos = { x: 0, y: 0 };

  const lib = {};

  for (const item of arr) {
    const direction = item[0];
    const steps = Number.parseInt(item.slice(2));

    for (let i = 0; i < steps; i++) {

      switch (direction) {
        case "R":
          headPos.x++;
          break;
        case "L":
          headPos.x--;
          break;
        case "U":
          headPos.y++;
          break;
        case "D":
          headPos.y--;
      }

      const xDif = headPos.x - tailPos.x;
      const yDif = headPos.y - tailPos.y;

      if (Math.abs(xDif) > 1 || Math.abs(yDif) > 1) {
        tailPos.x += xDif === 0 ? 0 : xDif > 0 ? 1 : -1;
        tailPos.y += yDif === 0 ? 0 : yDif > 0 ? 1 : -1;
      }

      lib[`${tailPos.x}_${tailPos.y}`] = true;
    }
  }
  
  let count = 0;

  for (const key in lib) {
    count++;
  }

  console.log(count);
})();
