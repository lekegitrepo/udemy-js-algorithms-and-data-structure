
function addUpToSlow(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToFast(n) {
  return n * (n + 1) / 2
}

const time1 = performance.now();
addUpToSlow(1000000000);
const time2 = performance.now();
console.log(`addUpToSlow: Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

const time3 = performance.now();
addUpToFast(1000000000);
const time4 = performance.now();
console.log(`addUpToFast: Time Elapsed: ${(time4 - time3) / 1000} seconds.`)

console.log('This is addUpToSlow: 6 ', addUpToSlow(6))
console.log('This is addUpToSlow: 8 ', addUpToSlow(8))
console.log('This is addUpToSlow: 100 ', addUpToSlow(100))
console.log('==============================================')
console.log('This is addUpToFast: 6 ', addUpToFast(6))
console.log('This is addUpToFast: 8 ', addUpToFast(8))
console.log('This is addUpToFast: 100 ', addUpToFast(100))
