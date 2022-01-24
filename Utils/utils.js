function findInObjectArray(array, property, value) {
	for (var i = 0; i < array.length; i++) {
		if (array[i][property] === value) {
			let flag = array.splice(i, 1)[0];
            return true;
		}
	}
	return false;
}

module.exports.findInObjectArray = findInObjectArray;