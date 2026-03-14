function DecreasingTrianglePattern(n) {
  for (let row = 0; row < n; row++) {
    let size = n - row; 
    let values = [];

    let coeff = 1;
    for (let k = 0; k < size; k++) {
      values.push(coeff);
      coeff = coeff * (size - 1 - k) / (k + 1);
    }

    let line = " ".repeat(row) + values.join(" ");
    console.log(line);
  }
}

DecreasingTrianglePattern(5);