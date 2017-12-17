const http = require('http');
const bl = require('bl');

let result = []
let count = 0

function printResult() {
  result.forEach((data) => {
    console.log(data)
  })
}

function juggling(id) {
  http.get(process.argv[2 + id], (response) => {
    response.pipe(bl((err, data) => {
      result[id] = data.toString()
      count++
      if (count == 3)
        printResult()
    }))
  })
}

for (let i = 0; i < 3; i++) {
  juggling(i)
}
