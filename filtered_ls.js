const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
  for (let file of list)
    if (path.extname(file) == '.' + process.argv[3])
      console.log(file)
})
