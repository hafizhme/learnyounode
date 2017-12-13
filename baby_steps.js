function getSum(total, elm) {
  return parseInt(total) + parseInt(elm)
}

console.log(process.argv.slice(2).reduce(getSum))
