export const COUNT_ADD = "COUNT_ADD";
export const COUNT_REMOVE = "COUNT_REMOVE";
export const COUNT_INPUT = "COUNT_INPUT";

export const plusOne = () => {
	return {
		type: COUNT_ADD,
	};
};

export const minusOne = () => {
	return {
		type: COUNT_REMOVE,
	};
};

const initialState = {
	number: 0,
};

const counter = (state = initialState, action) => {
	switch (action.type) {
		case COUNT_ADD:
			return { number: state.number + action.payload };
		case COUNT_REMOVE:
			return { number: state.number - action.payload };
		default:
			return state;
	}
};

export default counter;
export const SelectCounter = (state) => state.counter;
