// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
  return array.filter((x, i) => {
    return x === 0 || x % i === 0
  })
}