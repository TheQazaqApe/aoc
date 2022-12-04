import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_3/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let score = 0;

  for (let i=0; i<arr.length; i += 3) {
    const first = arr[i];
    const second = arr[i+1];
    const third = arr[i+2];

    for (const character of first) {
      if (second.includes(character) && third.includes(character)) {
        const asciiCode = character.charCodeAt(0);

        if (asciiCode > 90) score += asciiCode - 96; // a-z
        else score += asciiCode - 64 + 26; // A-Z

        break;
      }
    }
  }

  console.log(score);
})();
