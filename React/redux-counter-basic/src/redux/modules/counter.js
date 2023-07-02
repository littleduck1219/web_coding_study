// action value
export const PLUS_ONE = "PLUS_ONE";
export const MINUS_ONE = "MINUS_ONE";
export const PLUS_N = "PLUS_N";

// action creator : action value를 return하는 함수
export const plusOne = () => {
	return {
		type: PLUS_ONE,
	};
};

export const minusOne = () => {
	return {
		type: MINUS_ONE,
	};
};

export const plusN = (payload) => {
	return {
		type: PLUS_N,
		payload: payload,
	};
};

// 초기값
// const [number , setNumber] = useState(0)
const initialState = {
	number: 0,
};

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state, action
const counter = (state = initialState, action) => {
	// action에는 type, value가 있다.
	switch (action.type) {
		case PLUS_ONE:
			return { number: state.number + 1 };
		case MINUS_ONE:
			return { number: state.number - 1 };
		case PLUS_N:
			return { number: state.number + action.number };
		default:
			return state;
	}
};

export default counter;
