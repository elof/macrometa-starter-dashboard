/**
 * Helper Functions
 */

export function genRandom(max = 99) {
  return function () {
    return Math.floor(Math.random() * max) + 1
  }
}

export function repeatN(fn, num) {
  return Array.from({ length: num }, (x, i) => {
    return fn();
  })
}