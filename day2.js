const MAX_FIBO = 4000000000
let even_sum = 0
let a = 0, b = 1

while (a < MAX_FIBO) {
  if ((a % 2) == 0) {
    even_sum += a
  }
  let c = a
  a = b, b = b + c
}
console.log(even_sum)
// 1485607536
