"use strict";
const queens = [];
const tributeChest = [];

const createQueen = (queenId, queenName) => {
	const queenObject = {
		queenId: queenId,
		name: queenName,
	};

	queens.push(queenObject);
};

const payTribute = (tributeID, tributeDescription, queenId) => {
	const tribute = {
		id: tributeID,
		description: tributeDescription,
		queenId: queenId,
	};

	tributeChest.push(tribute);
};

const hailTheQueen = (nameString) => {
	return `Hail Her Majesty, ${nameString}.`;
};

createQueen(1, "Trinity Terry");
createQueen(2, "Freddie Mercury");
createQueen(3, "Brian May");
createQueen(4, "John Deacon");
createQueen(5, "Roger Taylor");

payTribute(1, "microphone", 2);
payTribute(2, "guitar", 3);
payTribute(3, "bass", 4);
payTribute(4, "drum kit", 5);

for (const queenObject of queens) {
	const hailMessage = hailTheQueen(queenObject.name);
	console.log(hailMessage);
}

//iterate through Queen Object
for (const queenObject of queens) {
	//iterate through the tribute chest
	for (const tribute of tributeChest) {
		if (queenObject.queenId === tribute.queenId) {
			console.log(
				`${queenObject.name} has been paid tribute with a ${tribute.description}.`
			);
		}
	}
}
