const arr = [1, 2, 3, 4];
const sumarr = arr.reduce((prev, current) => prev + current);

console.log(sumarr);

let objarr = [{ x: 1 }, { x: 2 }, { x: 3 }];

const sumobj = objarr.reduce((prev, curr) => {
  console.log(prev);
  return prev + curr.x;
});

console.log(sumobj);
