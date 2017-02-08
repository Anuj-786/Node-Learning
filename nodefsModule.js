var fs = require('fs')
console.log("going to open the existing file")
fs.open('test.txt', 'r+', function(err, fd){
  if(err) {
    throw error
  }
  //file open successfully
  var readBuffer = new Buffer(1024),
    bufferOffset = 0,
    bufferLength = readBuffer.length,
    filePosition = 0;
   
  fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes) {
      if(err) {
        throw err;    
      }
      console.log('just read' + " " +readBytes+ " " +'bytes');
      if(readBytes > 0) {
        console.log(readBuffer.slice(0, readBytes))
      }
    })
})
