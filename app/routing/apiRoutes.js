var friendsData = require('../data/friends');

var closestMatch;

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		var newPerson = req.body;

		console.log('New Person: ' + JSON.stringify(newPerson, null, 2));

		friendsData.push(newPerson);

		var differenceArray = [];

		if (friendsData.length >= 2) {
			for (var i = 0; i < friendsData.length - 1; i++) {
				var difference = 0;

				difference += Math.abs(friendsData[i].statement1Answer - newPerson.statement1Answer);
				difference += Math.abs(friendsData[i].statement2Answer - newPerson.statement2Answer);
				difference += Math.abs(friendsData[i].statement3Answer - newPerson.statement3Answer);
				difference += Math.abs(friendsData[i].statement4Answer - newPerson.statement4Answer);
				difference += Math.abs(friendsData[i].statement5Answer - newPerson.statement5Answer);
				difference += Math.abs(friendsData[i].statement6Answer - newPerson.statement6Answer);
				difference += Math.abs(friendsData[i].statement7Answer - newPerson.statement7Answer);
				difference += Math.abs(friendsData[i].statement8Answer - newPerson.statement8Answer);
				difference += Math.abs(friendsData[i].statement9Answer - newPerson.statement9Answer);
				difference += Math.abs(friendsData[i].statement10Answer - newPerson.statement10Answer);

				differenceArray.push(difference);
			}

			var smallestDifIndex = differenceArray.indexOf(Math.min.apply(Math, differenceArray));

			closestMatch = friendsData[smallestDifIndex];

			console.log('Closest Match: ' + closestMatch.name);

		} else {

			console.log('Need more people!')
		}

		res.json(closestMatch)
		
	});

};
