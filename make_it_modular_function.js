const fs = require('fs');
const path = require('path');

module.exports = function(dirName, extName, callback) {
  fs.readdir(dirName, (err, list) => {
    if (err) return callback(err)

    var ret = []
    for (let file of list)
      if (path.extname(file) == '.' + extName)
        ret.push(file)

    callback(null, ret)
  })
};
