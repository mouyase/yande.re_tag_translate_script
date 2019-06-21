var KeyMap = {};

function add(key,value) {
	KeyMap[key] = value;
}

module.exports = {
	add
}

require('./KeyMap');

var fs = require('fs'); // 引入fs模块

fs.writeFile('./KeyMap.json', JSON.stringify(KeyMap), error => {
});