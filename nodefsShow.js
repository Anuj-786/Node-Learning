var fs = require('fs');

fs.readFile('test.txt', function(err, data) {
  if(err) {
    return console.log(err);
  }
  console.log('Asynchronous read' + " " +data.toString());
})
