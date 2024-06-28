function countSheeps(sheep) {
  // TODO
  return sheep.reduce((total, c) => total + (c === true ? c : 0), 0)
}