const filterLs = require('./make_it_modular_function.js');

const dirName = process.argv[2]
const extFilter = process.argv[3]

filterLs(dirName, extFilter, (err, ret) => {
  if (err) {
    return console.error('There was an error:', err)
  }
  ret.forEach((file) => {
    console.log(file)
  })
})
