import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_7/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  const folders = { "/": 0 };

  let folderPath = [];

  for (const item of arr) {
    if (item === "$ cd /") {
      continue;
    } else if (item === "$ ls") {
      continue;
    } else if (item === "$ cd ..") {
      folderPath.pop();
      continue;
    } else if (item.startsWith("$ cd ")) {
      folderPath.push(item.slice(5));
      continue;
    } else if (!item.startsWith("dir")) {
      for (let i = 0; i < folderPath.length; i++) {

        if (!folders[folderPath.slice(0, i + 1).join("-")]) {
          folders[folderPath.slice(0, i + 1).join("-")] = 0;
        }

        folders[folderPath.slice(0, i + 1).join("-")] += Number.parseInt(item.split(" ")[0], 10);
      }

      folders["/"] +=Number.parseInt(item.split(" ")[0], 10);
    }
  }

  let sum = 0;

  for (const key in folders) {

    if (folders[key] > 100000) continue;

    sum += folders[key];
  }

  console.log(sum);
})();
