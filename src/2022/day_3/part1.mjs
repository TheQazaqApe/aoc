import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_3/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let score = 0;

  for (const item of arr) {
    const left = item.slice(0, item.length/2);
    const right = item.slice(item.length/2, item.length);

    for (const character of left) {
      if (right.includes(character)) {
        const asciiCode = character.charCodeAt(0);

        if (asciiCode > 90) score += asciiCode - 96; // a-z
        else score += asciiCode - 64 + 26; // A-Z

        break;
      }
    }
  }

  console.log(score);
})();
