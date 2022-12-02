import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./src/day_2/input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  let score = 0;
  const score_select = {
    "X": 1,
    "Y": 2,
    "Z": 3
  };
  const score_draw = 3;
  const score_win = 6;

  for (const [opponent, _, me] of arr) {
    if (opponent === "A") {
      switch (me) {
        case "X":
          score += score_select[me] + score_draw;
          break;
        case "Y":
          score += score_select[me] + score_win;
          break;
        case "Z": 
          score += score_select[me];
      }
    } else if (opponent === "B") {
      switch (me) {
        case "X":
          score += score_select[me];
          break;
        case "Y":
          score += score_select[me] + score_draw;
          break;
        case "Z": 
          score += score_select[me] + score_win;
      }
    } else {
      switch (me) {
        case "X":
          score += score_select[me] + score_win;
          break;
        case "Y":
          score += score_select[me];
          break;
        case "Z": 
          score += score_select[me] + score_draw;
      }
    }
  }

  console.log(score);
})()
