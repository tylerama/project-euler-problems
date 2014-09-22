(function () {
	var getSundays = function () {
		var numOfSundays = 0;

		for (var i = 1901; i <= 2000; i++) {
			for (var j = 0; j < 12; j++) {
				// console.log(new Date(i, j, 1).getDay());
				if (new Date(i, j, 1).getDay() === 0) {
					numOfSundays++;
				}
			}
		}
		return numOfSundays;
	};

	console.log(getSundays());
	// Fastest time was 2.000ms
})();