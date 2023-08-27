interface IProps {
	word: IWord;
}

interface IWord {
	id: number;
	day: string;
	eng: string;
	kor: string;
	isDone: boolean;
}

interface days {
	id: number;
	day: number;
}

export { days, IProps, IWord };
