let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let s = 0; s < i; s++) {
    row += " ";
  }

  let num = 1;
  let max = n - i;

  for (let j = 0; j < max; j++) {
    row += num + " ";

    if (j < Math.floor(max / 2)) {
      num += (max - 1) - 2 * j;
    } else {
      num -= (max - 1) - 2 * (max - j - 1);
    }
  }

  console.log(row.trim());
}
