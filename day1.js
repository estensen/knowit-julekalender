for (let n = 16; n < Number.MAX_SAFE_INTEGER; n += 10) {
  if (n * 4 === parseInt(6 + '' + (n - 6) / 10)) {
    console.log(n)
    break
  }
}
