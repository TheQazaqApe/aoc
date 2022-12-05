import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_5/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  const stacks = [];

  for (let i = 0; i < 8; i++) {
    const crates = arr[i];

    let index = 1;
    
    for (let j = 0; j < 9; j++) {
      if (crates[index] !== " ") {
        if (!stacks[j]) {
          stacks[j] = [crates[index]];
        } else {
          stacks[j].unshift(crates[index]);
        }
      }

      index += 4;
    }
  }
  
  for (let i = 10; i < arr.length; i++) {
    const fromIndex = arr[i].indexOf(" from");
    const toIndex = arr[i].indexOf(" to");

    const amount = parseInt(arr[i].slice(4, fromIndex), 10);
    const from = parseInt(arr[i].slice(fromIndex + 5, toIndex), 10) - 1;
    const to = parseInt(arr[i].slice(toIndex + 3), 10) - 1;

    for (let j = 0; j < amount; j++) {
      stacks[to].push(stacks[from].pop());
    }
  }

  console.log(stacks);
})()
