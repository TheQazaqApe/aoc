import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_6/input.txt", { encoding:"utf-8" });

  for (let i = 0; i < values.length - 14; i++) {
    const lib = {};

    let sign = true;

    for (let j = i; j < i + 14; j++) {
      if (lib[values[j]]) {
        sign = false;
        break;
      }
      lib[values[j]] = true;
    }

    if (sign) {
      return console.log(i + 14);
    }
  }
})();
