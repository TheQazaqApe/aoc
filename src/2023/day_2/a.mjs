import { promises as fs } from "fs";

(async () => {
  const values = await fs.readFile("./input.txt", { encoding: "utf-8" });

  const arr = values.split("\n");

  part1(arr);
  part2(arr);
})()

function part1(arr) {
 // 12 red 13 green 14 blue
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const games = arr[i].split(':')[1].split(';');
    let possible = true;
    for (const game of games) {
      let red = 0;
      let blue = 0;
      let green = 0;
      const cubes = game.split(',');
      for (const cube of cubes) {
        const [quantity, color] = cube.trim().split(' ');
        switch (color) {
          case 'red':
            red += parseInt(quantity);
            break;
          case 'blue':
            blue += parseInt(quantity);
            break;
          case 'green':
            green += parseInt(quantity);
        }
      }
      if (red > 12 || blue > 14 || green > 13) {
        possible = false;
        break;
      }
    }
    if (possible) {
      result += i + 1;
    }
  }
  console.log('part1', result);
}


function part2(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const games = arr[i].split(':')[1].split(';');
    let red = 0;
    let blue = 0;
    let green = 0;
    for (const game of games) {
      const cubes = game.split(',');
      for (const cube of cubes) {
        const [quantity, color] = cube.trim().split(' ');
        let qq = parseInt(quantity);
        switch (color) {
          case 'red':
            red = qq > red ? qq : red;
            break;
          case 'blue':
            blue = qq > blue ? qq : blue;
            break;
          case 'green':
            green = qq > green ? qq : green;
        }
      }
    }
    result += red*blue*green;
  }
  console.log('part2', result);
}