// print elements in spiral pattern
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let x_min = 0;
let y_min = 0;
let x_max = 3;
let y_max = 3;

// initializing the starting pt for looping
let x = x_min;
let y = y_max;

for (let i = 1; i < arr.length * arr[0].length; i++) {
  if (i === (y_max - x_min + 1) * 4 - 4) {
    x_min++;
    y_min++;
    y_max--;
    x_max--;
  }
  if (i === 1) {
    console.log(arr[x][y]);
  }
  if (x === x_min && y < y_max) {
    y++;
  } else if (y === y_max && x < x_max) {
    x++;
  } else if (x === x_max && y > y_min) {
    y--;
  } else if (y === y_min && x > x_min) {
    x--;
  }
  console.log(arr[x][y]);
}
