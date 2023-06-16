function solution(participant, completion) {
	participant.sort();
	completion.sort();

	for (let i in participant) {
		if (participant[i] !== completion[i]) {
			return participant[i];
		}
	}
}

function solution(participant, completion) {
	let fail = [];
	participant.forEach((e) => {
		if (!completion.includes(e)) {
			fail.push(e);
		}
	});
	return fail;
}
