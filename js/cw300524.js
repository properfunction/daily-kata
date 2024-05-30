function removeEveryOther(arr) {
  return arr.filter((el, i) => {
    return i % 2 === 0;
  })
}
