var path = require('path');
//console.log(path);

//Normalizing path
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

//Joining Path
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

//resolve path
console.log('resolve :' +path.resolve('nodePathModule.js'));

//extNamee
console.log('ext Name :' +path.extname('nodePathModule.js'));
