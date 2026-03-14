function DecreasingTrianglePattern(n) {
  for (let row = 0; row < n; row++) {
    let values = [];
    
    for (let col = 0; col <= n - 1 - row; col++) {
      let coeff = 1;
      for (let k = 0; k < col; k++) {
        coeff = coeff * (n - 1 - row - k) / (k + 1);
      }
      values.push(Math.round(coeff));
    }
    
    let spaces = " ".repeat(row);
    console.log(spaces + values.join(" "));
  }
}

DecreasingTrianglePattern(5);