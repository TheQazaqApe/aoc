import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_9/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let headPos = { x: 0, y: 0 };
  const pos = [];

  for (let i = 0; i < 9; i++) {
    pos.push({ x: 0, y: 0 });
  }

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
      
      let xDif = headPos.x - pos[0].x;
      let yDif = headPos.y - pos[0].y;

      if (Math.abs(xDif) > 1 || Math.abs(yDif) > 1) {
        pos[0].x += xDif === 0 ? 0 : xDif > 0 ? 1 : -1;
        pos[0].y += yDif === 0 ? 0 : yDif > 0 ? 1 : -1;
      }

      for (let j = 1; j < 9; j++) {
        xDif = pos[j - 1].x - pos[j].x;
        yDif = pos[j - 1].y - pos[j].y;
  
        if (Math.abs(xDif) > 1 || Math.abs(yDif) > 1) {
          pos[j].x += xDif === 0 ? 0 : xDif > 0 ? 1 : -1;
          pos[j].y += yDif === 0 ? 0 : yDif > 0 ? 1 : -1;
        }
      }

      lib[`${pos[8].x}_${pos[8].y}`] = true;
    }
  }
  
  let count = 0;

  for (const key in lib) {
    count++;
  }

  console.log(count);
})();
